// root: window object if the code is running in the browser or undefined in node
// factory: function that will return the library

// Runs NodeJS, Browsers, and Webworkers
(function(root, factory) {
  if (typeof define === 'function' && define.amd) { // checks if there is global "define" function -- NodeJS
    define([], factory);
  } else if (typeof module === 'object' && module.exports) { // checks global "module" -- NodeJS
    module.exports = factory();
  } else {
    root.stringLib = factory(); // running in browser
  }
}(typeof self !== 'undefined' ? self : this, function() { // Becomes root object if self exists ; Doesn't if self DNE
  return {
    version: '1.0.0',
    ordinalize: (ordinal) => {
      const o = '' + ordinal;

      if (!o || !parseInt(o, 10)) return '';

      const last = o.at(-1) ?? '';
      return o + (suffixes.get(last) ?? 'th');
    },
  };
}));

