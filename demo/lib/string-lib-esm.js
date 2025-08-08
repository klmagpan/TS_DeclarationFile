const suffixes = new Map([
  ['1', 'st'],
  ['2', 'nd'],
  ['3', 'rd'],
]);

export default stringLib = {
  version: '1.0.0',
  ordinalize: (ordinal) => {
    const o = '' + ordinal;

    if (!o || !parseInt(o, 10)) return '';

    const last = o.at(-1) ?? '';
    return o + (suffixes.get(last) ?? 'th');
  },
}
