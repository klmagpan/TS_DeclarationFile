(function () {
  if (window && !window.StringLib) {
    const suffixes = new Map([
      ['1', 'st'],
      ['2', 'nd'],
      ['3', 'rd'],
    ]);

    window.StringLib = {
      version: '1.0.0',
      ordinalize: function(ordinal) {
        const o = '' + ordinal;
        const numFormat = parseInt(o, 10);

        if (!o || !numFormat || numFormat < 0) return '';

        const last = o.at(-1) ?? '';
        return o + (suffixes.get(last) ?? 'th');
      },
    };
  }
}());
