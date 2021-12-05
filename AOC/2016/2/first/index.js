const Test = (instructions) => {
  const baseMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  let response = '';
  const position = {
    x: 1,
    y: 1,
  };
  const lines = instructions.split('\n');
  lines.forEach((line) => {
    const instructions = line.split('');
    instructions.forEach((instruction) => {
      switch (instruction) {
        case 'U':
          if (position.x > 0) position.x--;
          break;
        case 'D':
          if (position.x < 2) position.x++;
          break;
        case 'L':
          if (position.y > 0) position.y--;
          break;
        case 'R':
          if (position.y < 2) position.y++;
          break;
        default:
      }
    });
    response += baseMatrix[position.x][position.y];
  });
  return response;
};

module.exports = { Test };
