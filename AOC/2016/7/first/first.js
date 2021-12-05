// Pay attention to .length
// Pay attention to .slice the second argument is an exclusive one
// Try examples
// check each part of the code individualy

const Test = (data) => {
  const lines = data.split(',');
  const regex = /\[\w+\]/gm;

  const lookForMatch = (text) => {
    const textArray = text.split('');
    for (let i = 0; i <= textArray.length - 4; i++) {
      const firstSequence = textArray.slice(i, i + 2);
      const secondSequence = textArray.slice(i + 2, i + 4).reverse();
      if (
        // avoid type aaaa sequence
        firstSequence[0] !== firstSequence[1] &&
        // check if has type abba sequence
        firstSequence.join('') === secondSequence.join('')
      )
        return true;
    }
    return false;
  };

  const response = [];
  lineLoop: for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bracketData = line.match(regex);
    const outsideData = line.split(regex);
    let bracketPass = true;

    bracketLoop: for (let j = 0; j < bracketData.length; j++) {
      const text = bracketData[j];
      // check if bracket has sequence
      if (lookForMatch(text)) {
        // skip check for outer strings
        bracketPass = false;
        // stop check once one is found
        break bracketLoop;
      }
    }

    // skip check for outer strings if has failed bracket
    if (bracketPass) {
      outsideLoop: for (let k = 0; k < outsideData.length; k++) {
        const text = outsideData[k];
        // check if outside has sequence
        if (lookForMatch(text)) {
          // add line to response
          response.push(line);
          // skip resto of the line
          break outsideLoop;
        }
      }
    }
  }
  return response.length;
};

module.exports = { Test };
