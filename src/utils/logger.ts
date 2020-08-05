export class Logger {
  constructor() {}

  success(message: string) {
    console.log(
      `\x1B[32m [Node Markdown Parser] Success: \x1B[35m ${message} \x1B[0m`
    );
  }

  error(message: string) {
    console.error(
      `\n\x1B[31m [Node Markdown Parser] Error: ${message} \x1B[0m\n`
    );
  }
}
