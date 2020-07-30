# Node Typescript Markdown Processor

This module process markdown data with Remark/Rehype ecosystem in nodejs environment.

## Install

```bash
# npm
npm install node-markdown-parser

# yarn
yarn add node-markdown-parser
```

## Use

### Import lib:

```ts
import { Markdown } from "node-markdown-parser";
```

### Create a **MarkdownParserOptions**:

```ts
import { Markdown, MarkdownParserOptions } from "node-markdown-parser";

let markdownOptions: MarkdownParserOptions = {
  rehypePlugins: [],
  remarkPlugins: [],
};

let markdown: Markdown = new Markdown(markdownOptions);
```

### Create a Markdown file with `Yaml` variables:

```md
---
title: With Love
subtitle: To World
---

# Simple markdown doc
```

### Read file from system and parse JSON:

```ts
import { Markdown, MarkdownParserOptions } from "node-markdown-parser";

let markdownOptions: MarkdownParserOptions = {
  rehypePlugins: [],
  remarkPlugins: [],
};

let markdown: Markdown = new Markdown(markdownOptions);

let file: string = vfile.readSync("./markdown/example.md", "utf-8");

let data = markdown.toJSON(file);

console.log(data);
```

### The object example returned have _yaml_ variables and TOC data up to 6 levels (H6) with slug (id):

```json
{
  "title": "With Love",
  "subtitle": "To World",
  "extension": ".md",
  "updatedAt": 1596071484169,
  "toc": [
    {
      "id": "simple-markdown-doc",
      "depth": 1,
      "text": "Simple markdown doc"
    }
  ],
  "body": "<h1 id=\"simple-markdown-doc\">Simple markdown doc</h1>"
}
```

> remark-slug is included in the lib

### Use **Remark/Rehype** plugins:

#### Install plugins in your root **node_modules**

```bash
npm install remark-attr

yarn add remark-attr
```

#### Add plugin name to config object

```ts
let markdownOptions: MarkdownParserOptions = {
  rehypePlugins: [],
  remarkPlugins: ["remark-attr"],
};
```

#### Update markdown file:

```md
---
title: With Love
subtitle: To World
---

# Simple markdown doc{style="color:yellow;"}
```

#### Output:

```json
{
  "title": "With Love",
  "subtitle": "To World",
  "extension": ".md",
  "updatedAt": 1596071999302,
  "toc": [
    {
      "id": "simple-markdown-doc",
      "depth": 1,
      "text": "Simple markdown doc"
    }
  ],
  "body": "<h1 style=\"color:yellow;\" id=\"simple-markdown-doc\">Simple markdown doc</h1>"
}
```

### Add absolute path:

#### The libs needs a `absolutePath` for search plugins in the root `node_modules`. If you need change this value you can add to **MarkdownParserOptions**:

```ts
let markdownOptions: MarkdownParserOptions = {
  rehypePlugins: ["rehype-katex"],
  remarkPlugins: ["remark-math", "remark-attr"],
  absolutePath: "/home/angular/docs/projects/test/node_modules",
};
```

## Thanks

- @nuxt/content

## Enjoy !
