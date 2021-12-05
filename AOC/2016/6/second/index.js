const Test = (data) => {
  const response = [];
  const lines = data.split(',');
  for (let cols = 0; cols < lines[0].length; cols++) {
    const letterCounter = new Map();
    for (let rows = 0; rows < lines.length; rows++) {
      const letter = lines[rows][cols];
      if (letterCounter.has(letter)) {
        const value = letterCounter.get(letter) + 1;
        letterCounter.set(letter, value);
      } else {
        letterCounter.set(letter, 1);
      }
    }
    const highestLetter = Array.from(letterCounter).sort(
      (a, b) => a[1] - b[1]
    )[0][0];
    response.push(highestLetter);
  }
  return response.join('');
};

module.exports = { Test };
