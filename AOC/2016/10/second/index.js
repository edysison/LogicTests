const Test = (data) => {
  let bots = [];
  let outputs = [];
  let botOrder = [];
  let actions = [];
  const inputs = [];
  const instructions = data.split(',');
  instructions.map((instruction) => {
    instruction.slice(0, 3) === 'bot'
      ? actions.push(instruction)
      : inputs.push(instruction);
  });

  const moveValue = (receiver, number, value) => {
    if (receiver === 'bot') {
      if (bots[number]) {
        bots[number].push(value);
        bots[number].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      } else {
        bots[number] = [value];
      }
    } else {
      if (outputs[number]) {
        outputs[number].push(value);
      } else {
        outputs[number] = [value];
      }
    }
  };

  inputLoop: for (let i = 0; i < inputs.length; i += 1) {
    const input = inputs[i].split(' ');
    const value = input[1];
    const botNumber = input[input.length - 1];

    if (bots[botNumber]) {
      bots[botNumber].push(value);
      bots[botNumber].sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
      botOrder.push(botNumber);
    } else {
      bots[botNumber] = [value];
    }
  }

  let skipedActions = [];

  while (actions.length > 0) {
    actionsLoop: for (let j = 0; j < actions.length; j += 1) {
      const action = actions[j].split(' ');
      const giverBotNumber = action[1];

      if (
        bots[giverBotNumber] === undefined ||
        bots[giverBotNumber].length !== 2
      ) {
        skipedActions.push(actions[j]);
        continue actionsLoop;
      }

      const firstReceiver = action[5];
      const firstReceiverNumber = action[6];

      const secondReceiver = action[action.length - 2];
      const secondReceiverNumber = action[action.length - 1];

      const instruction = action[3];

      const firstValue =
        instruction === 'low'
          ? bots[giverBotNumber][0]
          : bots[giverBotNumber][1];
      const secondValue =
        instruction === 'low'
          ? bots[giverBotNumber][1]
          : bots[giverBotNumber][0];

      moveValue(firstReceiver, firstReceiverNumber, firstValue);
      moveValue(secondReceiver, secondReceiverNumber, secondValue);

      bots[giverBotNumber] = [];
    }
    actions = skipedActions;
    skipedActions = [];
  }
  return (
    parseInt(outputs[0], 10) *
    parseInt(outputs[1], 10) *
    parseInt(outputs[2], 10)
  );
};

module.exports = { Test };
