// Use global require method (instead of export)
const stringLib = require('../lib/string-lib-cjs.js');

// Can install declarations manually
// npm install --save-dev @types/node

const myOrdinalized = stringLib.ordinalize('1');
console.log(myOrdinalized); // "1st"
