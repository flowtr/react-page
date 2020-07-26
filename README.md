# Node Markdown Processor

This module process markdown data with Remark/Rehype ecosystem in nodejs environment.

**Works with Highlightjs, Katex, TOC, Frontmatter, Slug...**

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
const vfile = require("to-vfile");

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

### The output:

```js
const objReturned = {
  data: { title: 'With Love', subtitle: 'To World' },
  toc: [
    { id: 'making', depth: 2, text: 'Making' },
    { id: 'great-things', depth: 3, text: 'Great things' }
  ],
  body: '<h2 id="making">Making</h2>\n' +
    '<h3 id="great-things">Great things</h3>\n' +
    '<p>With a simple node parser</p>\n' +
    '<p>And now Katex:</p>\n' +
    '<p>The number PI is represented by: <span class="math math-inline"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>π</mi></mrow><annotation encoding="application/x-tex">\\pi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.43056em;vertical-align:0em;"></span><span class="mord mathdefault" style="margin-right:0.03588em;">π</span></span></span></span></span></p>\n' +
    '<p>A Matrix is represented by:</p>\n' +
    '<div class="math math-display"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo fence="true">(</mo><mtable rowspacing="0.15999999999999992em" columnspacing="1em"><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>a</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>b</mi></mstyle></mtd></mtr><mtr><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>c</mi></mstyle></mtd><mtd><mstyle scriptlevel="0" displaystyle="false"><mi>d</mi></mstyle></mtd></mtr></mtable><mo fence="true">)</mo></mrow><annotation encoding="application/x-tex">\\begin{pmatrix} a &#x26; b \\\\ c &#x26; d \\end{pmatrix}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:2.40003em;vertical-align:-0.95003em;"></span><span class="minner"><span class="mopen delimcenter" style="top:0em;"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mtable"><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathdefault">a</span></span></span><span style="top:-2.4099999999999997em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathdefault">c</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9500000000000004em;"><span></span></spa
n></span></span></span><span class="arraycolsep" style="width:0.5em;"></span><span class="arraycolsep" style="width:0.5em;"></span><span class="col-align-c"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.45em;"><span style="top:-3.61em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathdefault">b</span></span></span><span style="top:-2.4099999999999997em;"><span class="pstrut" style="height:3em;"></span><span class="mord"><span class="mord mathdefault">d</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.9500000000000004em;"><span></span></span></span></span></span></span></span><span class="mclose delimcenter" style="top:0em;"><span class="delimsizing si
ze3">)</span></span></span></span></span></span></span></div>'
}
```

- Remember import CSS from [Katex](https://katex.org/docs/browser.html) in HTML or Bundle (Webpack, Rollup, etc.)

### Also works with Highlightjs!!

```js
const x = () => x * 3;
```

- Remember import CSS from [Highlightjs](https://highlightjs.org/usage/) in HTML or Bundle (Webpack, Rollup, etc.)
