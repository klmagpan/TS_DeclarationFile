/**
 * @name stringLib
 * @description Simple default modular string utilities
 */
declare namespace stringLib {
  const version: '1.0.0';

  /**
   * ordinalize
   * @param {string|number} ordinal The number to ordinalize
   * @returns {string}
   */
  function ordinalize(ordinal: string | number): string;
}

export default stringLib;
