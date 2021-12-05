const Test = (data) => {
  const lines = data.split(',');
  let response = 0;
  lines.filter((line) => {
    const codes = line.split('-');
    const lastCode = codes.pop();

    const letterCounter = new Map();
    const baseString = codes.join('');

    for (let i = 0; i < baseString.length; i++) {
      const letter = baseString[i];
      if (letterCounter.has(letter)) {
        const value = letterCounter.get(letter) + 1;
        letterCounter.set(letter, value);
      } else {
        letterCounter.set(letter, 1);
      }
    }

    const letterArray = Array.from(letterCounter)
      .sort((a, b) => (a[0] > b[0] ? 1 : -1))
      .sort((a, b) => b[1] - a[1]);

    const [number, code] = lastCode.replace(']', '').split('[');
    for (let j = 0; j < 5; j++) {
      const key = letterArray[j][0];
      if (code[j] !== key) return false;
    }

    const sentence = [];
    codes.forEach((baseString) => {
      const totalChanges = number % 26;
      let word = [];
      for (let i = 0; i < baseString.length; i++) {
        const letter = baseString[i];
        let ascCode = letter.charCodeAt(0) + parseInt(totalChanges, 10);
        if (ascCode > 122) ascCode -= 26;
        const formattedLetter = String.fromCharCode(ascCode);
        word.push(formattedLetter);
      }
      sentence.push(word.join(''));
    });
    if (sentence.join('').includes('northpole')) {
      response = number;
    }
  });

  return response;
};

module.exports = { Test };
