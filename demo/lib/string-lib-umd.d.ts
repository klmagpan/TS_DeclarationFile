/**
 * @name stringLib
 * @description Simple UMD string utilities
 */
export as namespace stringLib;

// Declared as module when used on nodejs
/**
 * @name stringLib
 * @description Simple UMD string utilities
 */
declare module './string-lib-umd';

// Otherwise, export as functions
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

