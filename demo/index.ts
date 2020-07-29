import { parseContent, MarkdownParserOptions } from "../lib/index";
import * as vfile from "to-vfile";

// const markdownParserOptions: MarkdownParserOptions = {
//   content: vfile.readSync("./demo/example.md"),
//   // plugins: {
//   //   rehypeDocumentOptions: {
//   //     css: [
//   //       "https://stackedit.io/style.css",
//   //       "https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",
//   //       "./prism-theme.css",
//   //     ],
//   //     style: ["html,body {margin: 100px;}"],
//   //   },
//   // },
// };

let markdownParserOptions: MarkdownParserOptions;
let parsedData: string;

markdownParserOptions = {
  content: vfile.readSync("./demo/example.md"),
};

parsedData = JSON.parse(parseContent(markdownParserOptions));

console.log(parsedData);
