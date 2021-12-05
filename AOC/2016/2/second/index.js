export const Test = (instructions) => {
  const baseMatrix = [
    [2, 3, 4],
    [6, 7, 8],
    ['A', 'B', 'C'],
  ];
  const position = {
    x: 1,
    y: -1,
  };
  const lines = instructions.split('\n');
  const response = lines.map((line) => {
    const instructions = line.split('');
    instructions.forEach((instruction) => {
      switch (instruction) {
        case 'U':
          if (
            (position.x === 0 && position.y === 1) ||
            (position.x > 0 && position.y !== -1 && position.y !== 3)
          )
            position.x--;
          break;
        case 'D':
          if (
            (position.x === 2 && position.y === 1) ||
            (position.x > 2 && position.y !== -1 && position.y !== 3)
          )
            position.x++;
          break;
        case 'L':
          if (
            (position.x === 1 && position.y === 0) ||
            (position.y > 0 && position.x !== -1 && position.x !== 3)
          )
            position.y--;
          break;
        case 'R':
          if (
            (position.x === 1 && position.y === 2) ||
            (position.y > 2 && position.x !== -1 && position.x !== 3)
          )
            position.y++;
          break;
        default:
      }
    });
    console.log(position);
    if (position.x === -1) return '1';
    if (position.x === 3) return 'D';
    if (position.y === -1) return '5';
    if (position.y === 3) return '9';
    return baseMatrix[position.x][position.y];
  });
  return response.join('');
};

module.exports = { Test };
