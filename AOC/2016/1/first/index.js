const Test = (
  instructions,
  starterPositon = [0, 0],
  starterDirection = 'north'
) => {
  const baseDirections = {
    north: {
      baseOperator: 'x',
      rightMultiplier: 1,
      right: 'east',
      leftMultiplier: -1,
      left: 'west',
    },
    east: {
      baseOperator: 'y',
      rightMultiplier: -1,
      right: 'south',
      leftMultiplier: 1,
      left: 'north',
    },
    west: {
      baseOperator: 'y',
      rightMultiplier: 1,
      right: 'north',
      leftMultiplier: -1,
      left: 'south',
    },
    south: {
      baseOperator: 'x',
      rightMultiplier: -1,
      right: 'west',
      leftMultiplier: 1,
      left: 'east',
    },
  };

  let position = starterPositon;
  let facedDirection = starterDirection;
  instructions.forEach((instruction) => {
    const turnTo = instruction[0];
    const steps = parseInt(instruction.substring(1), 10);
    const operator =
      baseDirections[facedDirection].baseOperator === 'x' ? 0 : 1;

    if (turnTo === 'R') {
      position[operator] =
        baseDirections[facedDirection].rightMultiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].right;
    }
    if (turnTo === 'L') {
      position[operator] =
        baseDirections[facedDirection].leftMultiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].left;
    }
  });

  return Math.abs(position[0]) + Math.abs(position[1]);
};

module.exports = { Test };
