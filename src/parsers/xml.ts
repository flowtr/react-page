import * as xml from "xml2js";

export interface Xmltojson {
  body: any[];
}

export class XML {
  private options: any;
  constructor(options: any) {
    this.options = options;
  }

  /**
   * Converts xml document to it's JSON structure.
   * @param {string} file - xml file
   * @return {Object}
   */
  public async toJSON(file: string): Promise<Xmltojson> {
    const body = await xml.parseStringPromise(file, this.options);

    return {
      body,
    };
  }
}
