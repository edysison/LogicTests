const Test = (data) => {
  let response = '';
  let target = data;
  let index = 0;
  let instructions = [];
  const repeatSequence = (caracters, loops) => {
    index += 1;
    const baseString = target.slice(index, index + caracters);
    for (let count = 0; count < loops; count++) {
      response += baseString;
    }
  };
  const findRepeat = (i) => {
    const letter = target[i];
    if (letter === '(' && instructions.length === 0) {
      instructions.push('');
      index += 1;
    } else if (letter === 'x' || parseInt(letter, 10) > 0) {
      instructions.push(target[i]);
      index += 1;
    } else if (letter === ')' && instructions.length > 0) {
      const joinedInstruction = instructions.join('');
      const repeat = joinedInstruction.split('x');
      instructions = [];
      const elements = parseInt(repeat[0], 10);
      const times = parseInt(repeat[1], 10);
      repeatSequence(elements, times);
      index += elements;
    } else {
      response += target[index];
      index += 1;
    }
  };

  while (target.length > index) {
    findRepeat(index);
    // if (target.length >= index && /\(+[\w]+\)/gm.test(response)) {
    //   index = 0;
    //   target = response;
    //   response = "";
    // }
  }
  return response.length;
};

module.exports = { Test };
