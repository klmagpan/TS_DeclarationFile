// A module file that uses the export keyword
// and declares the class StringLib
// which tells TS that at runtime, there will be
// a class called StringLib

// Declaration files: "declaration": true
/**
 * @name stringLib
 * @description Simple string utilities
 */
export declare class StringLib {
    /**
     * @name version
     * @description The version of stringLib
     */
    static readonly version = "1.0.0";
    private static suffixes; // Mentioned, without type because called private in string-lib.ts
    /**
     * ordinalize
     * @param {string|number} ordinal The number to ordinalize
     * @returns {string}
     */
    static ordinalize(ordinal: string | number): string;
}
