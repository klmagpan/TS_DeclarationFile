// Use define which is how you create an AMD module
// Install: npm install --save-dev @types/require

define('stringLib', function() {
  const suffixes = new Map([
    ['1', 'st'],
    ['2', 'nd'],
    ['3', 'rd'],
  ]);

  return {
    version: '1.0.0',
    ordinalize: (ordinal) => {
      const o = '' + ordinal;

      if (!o || !parseInt(o, 10)) return '';

      const last = o.at(-1) ?? '';
      return o + (suffixes.get(last) ?? 'th');
    },
  }
});
