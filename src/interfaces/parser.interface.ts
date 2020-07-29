import { RehypeDocumentOptions } from "./rehypeDocument.interface";

export interface MarkdownParserOptions {
  content: string;
  plugins?: {
    rehypeDocumentOptions?: RehypeDocumentOptions;
  };
}

export interface MarkdownToc {
  id: string;
  depth: number;
  text: string;
}

export interface JsonCompilerFile {
  data: any;
  messages: any[];
  history: any[];
  cwd: string;
  contents: string;
  result: JsonCompilerFileResult;
}

export interface JsonCompilerFileResult {
  type: string;
  children: any[];
}
