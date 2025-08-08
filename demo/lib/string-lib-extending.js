(function () {
  if (!String.prototype.ordinalize) { // Checks if there isn't already an ordinalize method
    String.prototype.ordinalize = function() { // Doesn't accept a parameter because it is called on string instances
      const suffixes = new Map([
        ['1', 'st'],
        ['2', 'nd'],
        ['3', 'rd'],
      ]);
      const numFormat = parseInt(this, 10);

      if (!numFormat || numFormat < 0) return '';

      const last = this.at(-1) ?? '';
      return this + (suffixes.get(last) ?? 'th');
    }
  }
}());
