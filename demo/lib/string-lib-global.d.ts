/**
 * @name StringLib
 * @description Simple global string utilities
 */
declare namespace StringLib {
	const version: '1.0.0';
  
	/**
	 * ordinalize
	 * @param {string|number} ordinal The number to ordinalize
	 * @returns {string}
	 */
	function ordinalize(ordinal: string|number): string;
  }
  