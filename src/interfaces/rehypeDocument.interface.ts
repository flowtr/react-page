export interface RehypeDocumentOptions {
  /**
   * Text to use as title.
   * @default 'name of file'
   */
  title?: string;
  /**
   * Natural language of document.
   * Should be a BCP 47 language tag.
   * @default 'en'
   */
  language?: string;
  /**
   * Whether to insert a meta[viewport].
   * @default true
   */
  responsive?: boolean;
  /**
   * Doctype to use.
   * @default '5'
   */
  doctype?: string;
  /**
   * CSS to include in head in <style> elements.
   * @default []
   */
  style?: string | string[];
  /**
   * Links to stylesheets to include in head.
   * @default []
   */
  css?: string | string[];
  /**
   * Metadata to include in head.
   * Each object is passed as properties to hastscript with a meta element.
   * @default []
   */
  meta?: Object | Object[];
  /**
   * Link tags to include in head
   * Each object is passed as properties to hastscript with a link element.
   * @default []
   */
  link?: Object | Object[];
  /**
   * Inline scripts to include at end of body
   * @default []
   */
  script?: string | string[];
  /**
   * External scripts to include at end of body
   * @default []
   */
  js?: string | string[];
}
