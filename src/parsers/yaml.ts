import * as yaml from "js-yaml";

export class Yaml {
  private options: any;

  constructor(options: any) {
    this.options = options;
  }

  /**
   * Converts yaml document to it's JSON structure.
   * @param {string} file - Yaml file
   * @return {Object}
   */
  public toJSON(file: string): any {
    return yaml.load(file, { ...this.options, json: true });
  }
}
