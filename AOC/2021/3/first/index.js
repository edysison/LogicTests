const Test = (data) => {
  const count = [];
  let i, j;
  for (i = 0; i < data.length; i++) {
    const line = data[i];
    for (j = 0; j < line.length; j++) {
      const digit = line[j];
      if (count[j] === undefined) count[j] = 0;
      if (digit == 1) count[j] += 1;
    }
  }
  let gamma = '',
    epsilon = '';
  for (i = 0; i < count.length; i++) {
    const digit = count[i];
    if (digit > data.length / 2) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  }
  return parseInt(gamma, 2) * parseInt(epsilon, 2);
};

module.exports = { Test };
