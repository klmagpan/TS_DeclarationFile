/**
 * @name stringLib
 * @description Simple AMD string utilities
 */
declare module './string-lib-amd';

/**
 * @name version
 * @description The version of stringLib
 */
export const version: '1.0.0';

/**
 * ordinalize
 * @param {string|number} ordinal The number to ordinalize
 * @returns {string}
 */
export function ordinalize(ordinal: string | number): string;
