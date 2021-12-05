const walkTo = (start, destination, trail) => {
  const dx = start[0] - destination[0];
  const dy = start[1] - destination[1];
  const steps = dx + dy;
  const multiplier = steps > 0 ? -1 : 1;
  for (let i = 1; i <= Math.abs(steps); i++) {
    let coords = '';
    if (dx !== 0) coords = `${start[0] + i * multiplier}/${start[1]}`;
    if (dy !== 0) coords = `${start[0]}/${start[1] + i * multiplier}`;
    if (trail.includes(coords)) return coords;
    trail.push(coords);
  }
  return '';
};

const Test = (
  instructions,
  starterPositon = [0, 0],
  starterDirection = 'north'
) => {
  const baseDirections = {
    north: {
      baseOperator: 'x',
      right: {
        direction: 'east',
        multiplier: 1,
      },
      left: {
        direction: 'west',
        multiplier: -1,
      },
    },
    east: {
      baseOperator: 'y',
      right: {
        direction: 'south',
        multiplier: -1,
      },
      left: {
        direction: 'north',
        multiplier: 1,
      },
    },
    west: {
      baseOperator: 'y',
      right: {
        direction: 'north',
        multiplier: 1,
      },
      left: {
        direction: 'south',
        multiplier: -1,
      },
    },
    south: {
      baseOperator: 'x',
      right: {
        direction: 'west',
        multiplier: -1,
      },
      left: {
        direction: 'east',
        multiplier: 1,
      },
    },
  };

  const breadCrumbs = [];
  let dejavuWarning = '';
  let answer = '';

  let position = starterPositon;
  let facedDirection = starterDirection;
  instructions.forEach((instruction) => {
    const lastPosition = [...position];
    const turnTo = instruction[0];
    const steps = parseInt(instruction.substring(1), 10);
    const operator =
      baseDirections[facedDirection].baseOperator === 'x' ? 0 : 1;
    if (turnTo === 'R') {
      position[operator] =
        baseDirections[facedDirection].right.multiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].right.direction;
    }
    if (turnTo === 'L') {
      position[operator] =
        baseDirections[facedDirection].left.multiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].left.direction;
    }
    dejavuWarning = walkTo(lastPosition, position, breadCrumbs);
    if (dejavuWarning && answer === '') answer = dejavuWarning;
  });
  if (answer) return answer;
  return Math.abs(position[0]) + Math.abs(position[1]);
};

module.exports = { Test };
