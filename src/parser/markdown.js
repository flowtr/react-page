const raw = require("rehype-raw");
const matter = require("gray-matter");
const html = require("rehype-stringify");
const math = require("remark-math");
const katex = require("rehype-katex");
const remark2rehype = require("remark-rehype");
const slug = require("remark-slug");
const markdown = require("remark-parse");
const unified = require("unified");
const highlight = require("rehype-highlight");
// const doc = require("rehype-document");

const jsonCompiler = require("./compilers/json");

function flattenNodeText(node) {
  const data =
    node.type === "text"
      ? node.value
      : node.children.reduce((text, child) => {
          return text.concat(flattenNodeText(child));
        }, "");

  return data;
}

function generateToc(body) {
  return body.children
    .filter((node) => ["h2", "h3"].includes(node.tag))
    .map((node) => {
      const id = node.props.id;
      const depth = node.tag === "h2" ? 2 : 3;
      const text = flattenNodeText(node);

      return {
        id,
        depth,
        text,
      };
    });
}

function generateJSON(content) {
  return new Promise((resolve, reject) => {
    const stream = unified().use(markdown).use(slug).use(remark2rehype);
    stream.use(jsonCompiler).process(content, (error, file) => {
      if (error) {
        return reject(error);
      }
      resolve(file.result);
    });
  });
}

function generateBody(content) {
  return new Promise((resolve, reject) => {
    const stream = unified()
      .use(markdown, { fragment: true })
      .use(highlight)
      .use(math)
      .use(slug)
      .use(remark2rehype, { allowDangerousHtml: true })
      .use(katex)
      .use(raw)
      .use(html);

    stream.process(content, (error, file) => {
      if (error) {
        return reject(error);
      }
      resolve(file.contents);
    });
  });
}

async function parseContent(file = "# Nothing\n## here") {
  const { data, content } = matter(file);
  const json = await generateJSON(content);
  const body = await generateBody(content);
  const toc = generateToc(json);

  return {
    data,
    toc,
    body,
  };
}

module.exports = parseContent;
