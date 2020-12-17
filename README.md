# @flowtr/react-page

A page loader for react apps that can currently only load markdown pages. It
uses [node-markdown-parser](https://github.com/cenguidanos/node-markdown-parser) behind the scenes to parse markdown
pages into a json object with the page title.

## Usage

To use this in your react app simply create a markdown file like so:

```markdown
---
title: 
subtitle: To World
---

Hello World!
```
