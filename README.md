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

let markdownOptions: MarkdownParserOptions;

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

let markdownOptions: MarkdownParserOptions;

let markdown: Markdown = new Markdown(markdownOptions);

let file: string = vfile.readSync("./markdown/example.md", "utf-8").contents;

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
  absolutePath: "/home/angular/docs/projects/project",
};
```

### Extra properties:

#### You can add extra properties in format:

```ts
import { Markdown, MarkdownParserOptions } from "node-markdown-parser";

let markdownOptions: MarkdownParserOptions;

let markdown: Markdown = new Markdown(markdownOptions);

let file: string = vfile.readSync("./markdown/example.md", "utf-8").contents;

let data = markdown.toJSON({ file, date: Date.now(), age: 27 });

console.log(data);
```

#### Output

```json
{
  "title": "With Love",
  "subtitle": "To World",
  "extension": ".md",
  "updatedAt": 1596414314975,
  "toc": [
    {
      "id": "simple-markdown-docstylecoloryellow",
      "depth": 1,
      "text": "Simple markdown doc{style=\"color:yellow;\"}"
    }
  ],
  "body": "<h1 id=\"simple-markdown-docstylecoloryellow\">Simple markdown doc{style=\"color:yellow;\"}</h1>",
  "date": 1596414314960,
  "age": 27
}
```

#### Also as array

```ts
import { Markdown, MarkdownParserOptions } from "node-markdown-parser";

let markdownOptions: MarkdownParserOptions;

let markdown: Markdown = new Markdown(markdownOptions);

let file: string = vfile.readSync("./markdown/example.md", "utf-8").contents;

let data = markdown.toJSON([
  { file, date: Date.now(), age: 27 },
  "# Other stuff in string format",
]);

console.log(data);
```

#### Output

```ts
[
  {
    title: "With Love",
    subtitle: "To World",
    extension: ".md",
    updatedAt: 1596414423314,
    toc: [[Object]],
    body:
      '<h1 id="simple-markdown-docstylecoloryellow">Simple markdown doc{style="color:yellow;"}</h1>',
    date: 1596414423299,
    age: 27,
  },
  {
    extension: ".md",
    updatedAt: 1596414423315,
    toc: [[Object]],
    body:
      '<h1 id="other-stuff-in-string-format">Other stuff in string format</h1>',
  },
];
```

### LokiDB support:

#### Add `db.active` to true if you want to receive a collection **lokidb** format object:

```ts
let markdownOptions: MarkdownParserOptions = {
  remarkPlugins: ["remark-attr"],
  db: {
    active: true,
  },
};
```

#### The output will be:

```json
{
  "name": "data",
  "unindexedSortComparator": "js",
  "defaultLokiOperatorPackage": "js",
  "_dynamicViews": [],
  "uniqueNames": [],
  "transforms": {},
  "rangedIndexes": {},
  "_data": [
    {
      "title": "With Love",
      "subtitle": "To World",
      "extension": ".md",
      "updatedAt": 1596298947212,
      "toc": [
        {
          "id": "simple-markdown-doc",
          "depth": 1,
          "text": "Simple markdown doc"
        }
      ],
      "body": "<h1 style=\"color:yellow;\" id=\"simple-markdown-doc\">Simple markdown doc</h1>",
      "meta": { "version": 0, "revision": 0, "created": 1596298947212 },
      "$loki": 1
    }
  ],
  "idIndex": [1],
  "maxId": 1,
  "_dirty": true,
  "_nestedProperties": [],
  "transactional": false,
  "asyncListeners": false,
  "disableMeta": false,
  "disableChangesApi": true,
  "disableDeltaChangesApi": true,
  "cloneObjects": false,
  "cloneMethod": "deep",
  "changes": [],
  "_fullTextSearch": null
}
```

#### You can pass **collection name** in options object:

```ts
let markdownOptions: MarkdownParserOptions = {
  remarkPlugins: ["remark-attr"],
  db: {
    active: true,
    collection: "content",
  },
};
```

See: [LokiDB](https://github.com/LokiJS-Forge/LokiDB)

### Multiple files or strings are supported in db mode and default mode

#### Pass an array of data to `toJSON()` method:

```ts
import {
  Markdown,
  MarkdownParserOptions,
} from "../node-markdown-parser/lib/index";

import * as vfile from "to-vfile";

// create parser
let markdownOptions: MarkdownParserOptions;
let markdown: Markdown = new Markdown(markdownOptions);

// read files from system
let file1: string = vfile.readSync("./markdown/example.md", "utf-8").contents;
let file2 = "## Hello, from file two";

// parse array of files
let data = markdown.toJSON([file1, file2]);

console.log(data);
```

#### Output array:

```json
[
  {
    "title": "With Love",
    "subtitle": "To World",
    "extension": ".md",
    "updatedAt": 1596301576871,
    "toc": [[Object]],
    "body": "<h1 id=\"simple-markdown-docstylecoloryellow\">Simple markdown doc{style=\"color:yellow;\"}</h1>"
  },
  {
    "extension": ".md",
    "updatedAt": 1596301576872,
    "toc": [[Object]],
    "body": "<h2 id=\"hello-from-file-two\">Hello, from file two</h2>"
  }
]
```

#### with **Lokidb** support:

```ts
import {
  Markdown,
  MarkdownParserOptions,
} from "../node-markdown-parser/lib/index";

import * as vfile from "to-vfile";

// create parser
let markdownOptions: MarkdownParserOptions = {
  remarkPLugins: ["remark-math", "remark-attr"],
  rehypePlugins: ["rehype-katex"],
  db: {
    active: true,
    collection: "parser",
  },
};
let markdown: Markdown = new Markdown(markdownOptions);

// read files from system
let file1: string = vfile.readSync("./markdown/example.md", "utf-8");
let file2 = "## Hello, from file two";

// parse array of files
let data = markdown.toJSON([file1, file2]);

console.log(data);
```

## Thanks

- @nuxt/content
- @lokidb/loki

## Enjoy !
