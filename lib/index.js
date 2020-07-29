"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseContent = void 0;
const raw = require("rehype-raw");
const html = require("rehype-stringify");
const math = require("remark-math");
const katex = require("rehype-katex");
const remark2rehype = require("remark-rehype");
const slug = require("remark-slug");
const markdown = require("remark-parse");
const unified = require("unified");
const prismjs = require("@mapbox/rehype-prism");
const matter = require("gray-matter");
const emoji = require("remark-emoji");
const attr = require("remark-attr");
// const doc = require("rehype-document");
// const format = require("rehype-format");
const browserOrNode = require("browser-or-node");
const jsonCompiler = require("./compiler.json");
function flattenNodeText(node) {
    const data = node.type === "text"
        ? node.value
        : node.children.reduce((text, child) => {
            return text.concat(flattenNodeText(child));
        }, "");
    return data;
}
function generateToc(json) {
    return json.children
        .filter((node) => ["h2", "h3", "h4", "h5", "h6"].includes(node.tag))
        .map((node) => {
        const id = node.props.id;
        const depth = node.tag === "h2"
            ? 2
            : node.tag === "h3"
                ? 3
                : node.tag === "h4"
                    ? 4
                    : node.tag === "h5"
                        ? 5
                        : 6;
        const text = flattenNodeText(node);
        return {
            id,
            depth,
            text,
        };
    });
}
function generateJSON(content) {
    return unified()
        .use(markdown)
        .use(slug)
        .use(remark2rehype)
        .use(jsonCompiler)
        .processSync(content).result;
}
function generateBody(content) {
    return unified()
        .use(markdown, { fragment: true })
        .use(attr)
        .use(emoji)
        .use(math)
        .use(slug)
        .use(remark2rehype, { allowDangerousHtml: true })
        .use(raw)
        .use(katex)
        .use(prismjs)
        .use(html)
        .processSync(content)
        .toString();
}
// function generateBodyWithDoc(
//   content: string,
//   options: RehypeDocumentOptions
// ): string {
//   return unified()
//     .use(markdown, { fragment: true })
//     .use(attr)
//     .use(emoji)
//     .use(math)
//     .use(slug)
//     .use(remark2rehype, { allowDangerousHtml: true })
//     .use(raw)
//     .use(katex)
//     .use(prismjs)
//     .use(doc, options)
//     .use(format)
//     .use(html)
//     .processSync(content)
//     .toString();
// }
function parseContent(options) {
    if (browserOrNode.isNode) {
        const { data, content } = matter(options.content);
        const json = generateJSON(content);
        const body = generateBody(content);
        const toc = generateToc(json);
        return JSON.stringify({
            ...data,
            extension: ".md",
            updatedAt: Date.now(),
            toc,
            body,
        });
    }
    else {
        console.error("Not Browser. Only Node environment.");
    }
}
exports.parseContent = parseContent;
