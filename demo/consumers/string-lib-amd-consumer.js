/* way 1: Similar to CommonJS module*/
const stringLib = require('../lib/string-lib-amd');

const myOrdinalized = stringLib.ordinalize('1');
console.log(myOrdinalized); // "1st"

/* way 2: Use Define and pass dependencies through array */
define(['../lib/string-lib-amd'], function(stringLib) {
  const myOrdinalized = stringLib.ordinalize('2');
  console.log(myOrdinalized); // "2nd"
});

/* way 3: Use requirejs that has the same signature as define function */
requirejs(['../lib/string-lib-amd'], function(stringLib) {
  const myOrdinalized = stringLib.ordinalize('2');
  console.log(myOrdinalized); // "2nd"
});
