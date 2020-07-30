import * as path from "path";
import { MarkdownParserOptions, MarkdownPlugin } from "../parsers/markdown";

/**
 * @param {string} resolvePath - Absolute path to parent node_modules
 * @param {MarkdownParserOptions} options - Remark/Rehype plugins
 * Assign plugin instances to options
 */
export function processMarkdownPlugins(
  options: MarkdownParserOptions,
  resolvePath: string
): void {
  options.remarkPlugins = loopPLugins("remark", options, resolvePath);
  options.rehypePlugins = loopPLugins("rehype", options, resolvePath);
}

/**
 *
 * @param {string} type - Remark or Rehype plugin. Values: 'remark' and 'rehype'
 * @param {MarkdownParserOptions} options - Remark/Rehype plugins
 * @param {string} resolvePath - Absolute path to parent node_modules
 */
const loopPLugins = (
  type: string,
  options: MarkdownParserOptions,
  resolvePath: string
): MarkdownPlugin[] => {
  const plugins = [];

  for (const plugin of options[`${type}Plugins`]) {
    let name: string;
    let options: any;
    let instance: () => {};
    let pathToRequire: string;

    if (typeof plugin === "object") {
      name = plugin.name;
      if (plugin.options) {
        options = plugin.options;
      }
    }

    if (typeof plugin === "string") {
      name = plugin;
    }

    pathToRequire = path.resolve(resolvePath, "node_modules", name);

    try {
      instance = require(pathToRequire);

      if (options) {
        plugins.push({ name, instance, options });
        console.log(
          `\x1B[32m [Node Typescript Markdown] Success: \x1B[35m ${name} module loaded! \x1B[0m`
        );
      } else {
        plugins.push({ name, instance });
        console.log(
          `\x1B[32m [Node Typescript Markdown] Success: \x1B[35m ${name} module loaded! \x1B[0m`
        );
      }
    } catch (e) {
      console.error(
        `\x1B[31m [Node Typescript Markdown] Error: Cannot find module ${name} on ${pathToRequire} \x1B[0m`
      );
    }
  }

  return plugins;
};
