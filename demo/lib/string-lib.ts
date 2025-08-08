// JSDoc denoted by double star multi-line comment /** */
// Provides helpful information 
/**
 * @name stringLib
 * @description Simple string utilities
 */
export class StringLib {
  /**
   * @name version
   * @description The version of stringLib
   */
  public static readonly version = '1.0.0';

  private static suffixes: Map<string, string> = new Map([
    ['1', 'st'],
    ['2', 'nd'],
    ['3', 'rd'],
  ]);

  /**
   * ordinalize
   * @param {string|number} ordinal The number to ordinalize
   * @returns {string}
   */
  public static ordinalize(ordinal: string | number): string {
    const o = '' + ordinal;

    if (!o || !parseInt(o, 10)) return '';

    const last = o.at(-1) ?? '';
    return o + (this.suffixes.get(last) ?? 'th');
  }
}

