import * as remark2rehype from "remark-rehype";
import * as matter from "gray-matter";
import * as parse from "remark-parse";
import * as slug from "remark-slug";
import * as unified from "unified";
import * as stringify from "rehype-stringify";

import { Loki, Collection } from "@lokidb/loki";

const jsonC = require("../compilers/json");

import { processMarkdownPlugins } from "../utils/plugins";
import { cwd } from "process";
import { Logger } from "../utils/logger";

export interface MarkdownToc {
  id: string;
  depth: number;
  text: string;
}

export interface MarkdownPlugin {
  name: string;
  instance: () => {};
  options?: object;
}
/**
 * @property {any[]} remarkPlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {any[]} rehypePlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {string} absolutePath - The lib need a absolute path to node_modules for find remark/rehype libs,
 * but you can also pass a string with your custom absolute path for node_modules.
 */
export interface MarkdownParserOptions {
  remarkPlugins?: any[];
  rehypePlugins?: any[];
  absolutePath?: string;
  db?: MarkdownParserDatabaseOptions;
}

export interface MarkdownParserDatabaseOptions {
  active: boolean;
  collection?: string;
}

const defaultOptions: MarkdownParserOptions = {
  rehypePlugins: [],
  remarkPlugins: [],
  db: { active: false },
};

export class Markdown {
  private options: MarkdownParserOptions;
  private absolutePath: string;
  private dbInstance: any;
  private logger: Logger;

  constructor(options: MarkdownParserOptions = defaultOptions) {
    this.logger = new Logger();

    this.options = options;

    if (this.options.absolutePath) {
      this.absolutePath = this.options.absolutePath;
    } else {
      this.absolutePath = cwd();
    }

    if (this.options.db) {
      this.dbInstance = this.options.db;
    } else {
      this.dbInstance = { active: false };
    }

    processMarkdownPlugins(this.options, this.absolutePath, this.dbInstance);
  }

  /**
   * Converts markdown document to it's JSON structure.
   * @param {string} file - Markdown file
   * @return {string} - Object stringified
   */
  public toJSON(file: any): any {
    let obj: any = [];

    if (Array.isArray(file)) {
      for (let item of file) {
        if (typeof item === "string") {
          const itemFile = this.toObject(item);
          obj.push(itemFile);
        } else {
          const itemFile = this.toObject(item.file);

          delete item.file;

          obj.push({ ...itemFile, ...item });
        }
      }

      if (this.options.db.active) {
        const collectionName = this.options.db.collection
          ? this.options.db.collection
          : "data";

        const db: Loki = new Loki();
        const collection: Collection = db.addCollection(collectionName);

        collection.insert(obj);

        obj = collection.toJSON();
      }

      return obj;
    } else {
      if (typeof file === "string") {
        obj = this.toObject(file);
      } else {
        obj = this.toObject(file.file);

        delete file.file;

        obj = { ...obj, ...file };
      }

      if (this.options.db.active) {
        const collectionName = this.options.db.collection
          ? this.options.db.collection
          : "data";

        const db: Loki = new Loki();
        const collection: Collection = db.addCollection(collectionName);

        collection.insertOne({
          ...obj,
        });

        obj = collection.toJSON();
      }

      return obj;
    }
  }

  /**
   * Converts markdown document to it's HTML content
   * @param {string} file - Markdown file
   * @return {string} - Object stringified
   */
  public toHTML(file: any): any {
    let obj: any = [];

    if (Array.isArray(file)) {
      for (let item of file) {
        if (typeof item === "string") {
          const itemFile = this.toObject(item, true);
          obj.push(itemFile);
        } else {
          this.logger.error("HTML mode only accepts strings");
        }
      }
      return obj;
    } else {
      if (typeof file === "string") {
        obj = this.toObject(file);
      } else {
        this.logger.error("HTML mode only accepts strings");
      }

      return obj;
    }
  }

  private toObject(file: any, onlyBody: boolean = false) {
    if (!onlyBody) {
      let { data, content } = matter(file);

      let json = this.generateContent(content, true);
      let body = this.generateContent(content);

      let toc: MarkdownToc[] = this.generateToc(json);

      let obj: any = {
        ...data,
        extension: ".md",
        updatedAt: Date.now(),
        toc,
        body,
      };

      return obj;
    } else {
      let body = this.generateContent(file);
      return body;
    }
  }

  private generateContent(content: string, toc?: boolean): object {
    let stream = unified().use(parse).use(slug);

    let remarkStream = this.processPluginsFor("remark", stream);
    let rehypeStream = this.processPluginsFor("rehype", stream);

    if (remarkStream) {
      stream = remarkStream;
    }

    stream = stream.use(remark2rehype, { allowDangerousHtml: true });

    if (rehypeStream) {
      stream = rehypeStream;
    }

    if (toc) {
      let tree: any = stream.use(jsonC).processSync(content);
      return tree.result;
    }

    let tree: any = stream.use(stringify).processSync(content);
    return tree.contents;
  }

  /**
   * Generate table of contents
   * @param {object} body - JSON AST generated from markdown.
   * @returns {array} List of headers
   */
  private generateToc(body: any): MarkdownToc[] {
    return body.children
      .filter((node: any) =>
        ["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tag)
      )
      .map((node: any) => {
        return this.assignTags(node);
      });
  }

  private assignTags(node: any) {
    let id: string = node.props.id;

    let depth = {
      h1: 1,
      h2: 2,
      h3: 3,
      h4: 4,
      h5: 5,
      h6: 6,
    }[node.tag];

    let text: string = this.flattenNodeText(node);

    return {
      id,
      depth,
      text,
    };
  }

  private processPluginsFor(type: string, stream: any): any {
    const typePlugin: any[] = this.options[`${type}Plugins`];

    for (const plugin of typePlugin) {
      stream = plugin.options
        ? stream.use(plugin.instance, plugin.options)
        : stream.use(plugin.instance);
    }

    return stream;
  }

  private flattenNodeText(node: any): any {
    return node.type === "text"
      ? node.value
      : node.children.reduce((text: any, child: any) => {
          return text.concat(this.flattenNodeText(child));
        }, "");
  }
}
