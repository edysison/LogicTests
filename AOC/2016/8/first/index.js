const Test = (data) => {
  let total = 0;

  const startResponse = () => {
    const baseArray = [];
    for (let i = 0; i < 6; i++) {
      baseArray.push([]);
      for (let j = 0; j < 50; j++) {
        baseArray[i].push('-');
      }
    }
    return baseArray;
  };

  const fillRectangle = (baseArray, rows, cols) => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        baseArray[row][col] = '#';
        total += 1;
      }
    }
    return baseArray;
  };

  const movePixels = (baseArray, direction, start, move) => {
    if (direction === 'row') {
      const formattedMove = move % 50;
      for (let i = 0; i < formattedMove; i++) {
        const lastData = baseArray[start].pop();
        baseArray[start].unshift(lastData);
      }
    }
    if (direction === 'column') {
      const formattedMove = move % 6;
      for (let i = 0; i < formattedMove; i++) {
        let dataToBeReplaced = '';
        for (let j = 0; j < 6; j++) {
          const nextPosition = j === 5 ? 0 : j + 1;
          const data = dataToBeReplaced || baseArray[j][start];
          dataToBeReplaced = baseArray[nextPosition][start];
          baseArray[nextPosition][start] = data;
        }
      }
    }
    return baseArray;
  };

  const lines = data.split(',');
  let response = startResponse();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const data = line.split(' ');
    if (data[0] === 'rect') {
      const numbers = data[1].split('x');
      response = fillRectangle(response, numbers[1], numbers[0]);
    } else {
      const startValue = data[2].split('=')[1];
      response = movePixels(response, data[1], startValue, data[4]);
    }
  }

  return total;
};

module.exports = { Test };
