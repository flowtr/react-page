# Node Markdown Processor

This module process markdown data with Remark/Rehype ecosystem in nodejs environment.

**Works with Prismjs, Katex, TOC, Frontmatter, Slug...**

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

### Create a async/await block, the lib returns a Promise:

```js
const markdownParser = require("node-markdown-parser");

const parser = async (content) => {
  return await markdownParser(content);
};
```

### Create a Markdown file with `Yaml` variables:

```md
---
title: With Love
subtitle: To World
---

## Making

### Great things

#### Great things 4

##### Great things 5

###### Great things 6

_With a simple node parser_
```

### Read file from system with `to-vfile` and parse JSON:

```js
const markdownParser = require("node-markdown-parser");
const vfile = require("to-vfile");

const data = vfile.readSync("example.md");

const parser = async (content) => {
  const doc = await markdownParser(content);
  console.log(JSON.parse(doc));
};

parser(data);
```

### The object example returned have _yaml_ variables and TOC data up to 6 levels (H6) with slug (id):

```json
{
  "title": "With Love",
  "subtitle": "To World",
  "extension": ".md",
  "updatedAt": 1595938654509,
  "toc": [
    { "id": "making", "depth": 2, "text": "Making" },
    { "id": "great-things", "depth": 3, "text": "Great things" },
    { "id": "great-things-4", "depth": 4, "text": "Great things 4" },
    { "id": "great-things-5", "depth": 5, "text": "Great things 5" },
    { "id": "great-things-6", "depth": 6, "text": "Great things 6" }
  ],
  "body":
    "<h2 id=\"making\">Making</h2>\n" +
    "<h3 id=\"great-things\">Great things</h3>\n" +
    "<h4 id=\"great-things-4\">Great things 4</h4>\n" +
    "<h5 id=\"great-things-5\">Great things 5</h5>\n" +
    "<h6 id=\"great-things-6\">Great things 6</h6>\n" +
    "<p><em>With a simple node parser</em></p>"
}
```

### Also support Katex in inline and display mode:

```
---
title: With Love
subtitle: To World
---

## Making

### Great things

With a simple node parser

And now Katex:

The number PI is represented by: $\pi$

A Matrix is represented by:

$$
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
$$

```

- Remember import Katex CSS from:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css"
  integrity="sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X"
  crossorigin="anonymous"
/>
```

or you can install Katex and import from `node_modules/katex/dist/katex.min.css`

### Also works with Prismjs:

- Remember import Prismjs Theme CSS from `node_modules/node-markdown-parser/node_modules/prism-themes/themes/<awesome-theme>.css`

### Also admit RAW html inside markdown content

```md
---
title: With Love
subtitle: To World
---

## Making

### Great things

With a simple node parser

And now Katex:

The number PI is represented by: $\pi$

A Matrix is represented by:

$$
\begin{pmatrix}
   a & b \\
   c & d
\end{pmatrix}
$$

<div style="background-color: #cc0000; padding: 20px;">
  <h3 style="color: #ccc000">HTML Raw</h3>
</div>
```
