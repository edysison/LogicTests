const Test = (data) => {
  const lines = data.split(',');
  const regex = /\[\w+\]/gm;

  const lookForMatch = (text) => {
    const allSequences = [];
    const textArray = text.split('');
    for (let i = 0; i <= textArray.length - 3; i++) {
      const sequence = textArray.slice(i, i + 3);
      if (
        // avoid type aaa sequence
        sequence[0] !== sequence[1] &&
        // check type aba sequence
        sequence[0] === sequence[2]
      )
        allSequences.push(sequence.join(''));
    }
    return allSequences;
  };

  const response = [];
  lineLoop: for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const bracketData = line.match(regex);
    const outsideData = line.split(regex);
    const bracketMatches = [];
    let bracketPass = true;

    bracketLoop: for (let j = 0; j < bracketData.length; j++) {
      const text = bracketData[j];
      const sequence = lookForMatch(text);
      // check if bracket has sequence
      if (sequence.length) {
        // stop check once one is found
        bracketMatches.push(...sequence);
      }
    }

    // skip check for outer strings if has failed bracket
    outsideLoop: for (let k = 0; k < outsideData.length; k++) {
      const text = outsideData[k];
      const sequence = lookForMatch(text);
      // check if outside has sequence
      if (sequence.length) {
        for (let l = 0; l < sequence.length; l++) {
          const element = sequence[l];
          const formattedSequence = [element[1], element[0], element[1]].join(
            ''
          );
          if (bracketMatches.includes(formattedSequence)) {
            response.push(line);
            break outsideLoop;
          }
        }
      }
    }
  }
  return response.length;
};

module.exports = { Test };
