const Test = (param) => {
  let base = [...param];
  let oxygen = '',
    carbon = '';
  let ones = [],
    zeros = [];
  let i, j;
  for (i = 0; i < base[0].length; i++) {
    for (j = 0; j < base.length; j++) {
      const line = base[j];
      const digit = line[i];
      if (digit === '1') ones.push(line);
      if (digit === '0') zeros.push(line);
    }
    if (ones.length >= zeros.length) {
      base = ones;
    } else {
      base = zeros;
    }
    oxygen = base[0];
    if (base.length === 1) break;
    ones = [];
    zeros = [];
  }
  base = [...param];
  for (i = 0; i < base[0].length; i++) {
    for (j = 0; j < base.length; j++) {
      const line = base[j];
      const digit = line[i];
      if (digit === '1') ones.push(line);
      if (digit === '0') zeros.push(line);
    }
    if (ones.length < zeros.length) {
      base = ones;
    } else {
      base = zeros;
    }
    carbon = base[0];
    if (base.length === 1) break;
    ones = [];
    zeros = [];
  }
  return parseInt(oxygen, 2) * parseInt(carbon, 2);
};

module.exports = { Test };
