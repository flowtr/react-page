import * as remark2rehype from "remark-rehype";
import * as matter from "gray-matter";
import * as parse from "remark-parse";
import * as slug from "remark-slug";
import * as unified from "unified";
import * as stringify from "rehype-stringify";

const jsonC = require("../compilers/json");

import { processMarkdownPlugins } from "../utils/plugins";
import { cwd } from "process";

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
 * @property {string[] | MarkdownPlugin[]} remarkPlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {string[] | MarkdownPlugin[]} rehypePlugins - String array for the names of the plugins to use
 * Alternatively, accepts an Object with 'name' and 'options' properties for especify lib options.
 * @property {string} absolutePath - The lib need a absolute path to node_modules for find remark/rehype libs,
 * but you can also pass a string with your custom absolute path for node_modules.
 */
export interface MarkdownParserOptions {
  remarkPlugins: string[] | MarkdownPlugin[];
  rehypePlugins: string[] | MarkdownPlugin[];
  absolutePath?: string;
}

export class Markdown {
  private options: MarkdownParserOptions;
  private absolutePath: string;

  constructor(options: MarkdownParserOptions) {
    this.options = options;
    this.absolutePath = this.options.absolutePath
      ? this.options.absolutePath
      : cwd();
    processMarkdownPlugins(this.options, this.absolutePath);
  }

  /**
   * Converts markdown document to it's JSON structure.
   * @param {string} file - Markdown file
   * @return {string} - Object stringified
   */
  public toJSON(file: string): any {
    let { data, content } = matter(file);

    let json = this.generateContent(content, true);
    let body = this.generateContent(content);

    let toc: MarkdownToc[] = this.generateToc(json);

    let obj = {
      ...data,
      extension: ".md",
      updatedAt: Date.now(),
      toc,
      body,
    };

    return obj;
  }

  private generateContent(content: string, toc?: boolean): object {
    let stream = unified().use(parse).use(slug);

    stream = this.processPluginsFor("remark", stream);
    stream = stream.use(remark2rehype, { allowDangerousHtml: true });
    stream = this.processPluginsFor("rehype", stream);

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
    for (const plugin of this.options[`${type}Plugins`]) {
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
