/**
 * @name stringLib
 * @description Simple CommonJS string utilities
 */
declare module './string-lib-cjs';

/**
 * @name version
 * @description The version of stringLib
 */
export const version: '1.0.0'; // const = "readonly"

/**
 * ordinalize
 * @param {string|number} ordinal The number to ordinalize
 * @returns {string}
 */

// Only provide funciton signature types (parameter types and return type)
export function ordinalize(ordinal: string | number): string;
