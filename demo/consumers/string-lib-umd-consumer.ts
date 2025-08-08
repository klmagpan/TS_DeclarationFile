/// <reference path="../lib/string-lib-umd.d.ts" />
/* Node way */
// import stringLib from '../lib/string-lib-umd';

// const myOrdinalized = stringLib.ordinalize('1');
// console.log(myOrdinalized); // "1st"

/* AMD way */
// declare type stringLib = {
//   version: '1.0.0';
//   ordinalize(ordinal: string | number): string;
// }
// define(['../lib/string-lib-umd'], function(stringLib: stringLib) {
//   const myOrdinalized = stringLib.ordinalize('2');
//   console.log(myOrdinalized); // "2nd"
// });

/* Global way */
// const myOrdinalized2 = window.stringLib.ordinalize('2');
// console.log(myOrdinalized2); // "2nd"
