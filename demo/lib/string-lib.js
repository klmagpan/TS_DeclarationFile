export class StringLib {
  static version = '1.0.0';

  static #suffixes = new Map([ // Marked with a # to show it's private
    ['1', 'st'],
    ['2', 'nd'],
    ['3', 'rd'],
  ]);

  static ordinalize(ordinal) {
    const o = '' + ordinal;

    if (!o || !parseInt(o, 10)) return '';

    const last = o.at(-1) ?? '';
    return o + (this.#suffixes.get(last) ?? 'th');
  }
}

