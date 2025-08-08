/**
 * @name stringLib
 * @description Simple AMD string utilities
 */
declare type StringLib = {
  /**
   * @name version
   * @description The version of stringLib
   */
  version: '1.0.0';

  /**
   * ordinalize
   * @param {string|number} ordinal The number to ordinalize
   * @returns {string}
   */
  ordinalize(ordinal: string | number): string;
};

/* way 1 */
import stringLib from '../lib/string-lib-amd';

const myOrdinalized = stringLib.ordinalize('1');
console.log(myOrdinalized); // "1st"

// /* way 2 */
// define(['../lib/string-lib-amd'], function(stringLib: StringLib) {
//   const myOrdinalized = stringLib.ordinalize('2');
//   console.log(myOrdinalized); // "2nd"
// });

// /* way 3 */
// requirejs(['../lib/string-lib-amd'], function(stringLib: StringLib) {
//   const myOrdinalized = stringLib.ordinalize('2');
//   console.log(myOrdinalized); // "2nd"
// });
