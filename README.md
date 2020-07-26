# Node Markdown processor

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

```js
const markdownParser = require("node-markdown-parser");
```

### Create a async/await block:

```js
const markdownParser = require("node-markdown-parser");

const parser = async (content) => {
  return await markdownParser.parseContent();
};
```

### Create a Markdown file with `Frontmatter`:

```md
---
title: With Love
subtitle: To World
---

## Making

### Great things

With a simple node parser
```

### Read file from system with `to-vfile`:

```js
const markdownParser = require("node-markdown-parser");

const data = vfile.readSync("example.md");

const parser = async (content) => {
  const doc = await markdownParser(content);
  console.log(doc);
};

parser(data);
```

### The object example returned have Frontmatter variables and TOC (table of contents) data:

```js
const objReturned = {
  data: {
    title: "With Love",
    subtitle: "To World",
  },
  toc: [
    { id: "making", depth: 2, text: "Making" },
    { id: "great-things", depth: 3, text: "Great things" },
  ],
  body:
    '<h2 id="making">Making</h2>\n' +
    '<h3 id="great-things">Great things</h3>\n' +
    "<p>With a simple node parser</p>",
};
```
