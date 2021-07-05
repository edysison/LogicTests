const testData = [
  "rect 1x1,rotate row y=0 by 5,rect 1x1,rotate row y=0 by 5,rect 1x1,rotate row y=0 by 3,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 3,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 5,rect 1x1,rotate row y=0 by 5,rect 1x1,rotate row y=0 by 3,rect 1x1,rotate row y=0 by 2,rect 1x1,rotate row y=0 by 3,rect 2x1,rotate row y=0 by 2,rect 1x2,rotate row y=1 by 5,rotate row y=0 by 3,rect 1x2,rotate column x=30 by 1,rotate column x=25 by 1,rotate column x=10 by 1,rotate row y=1 by 5,rotate row y=0 by 2,rect 1x2,rotate row y=0 by 5,rotate column x=0 by 1,rect 4x1,rotate row y=2 by 18,rotate row y=0 by 5,rotate column x=0 by 1,rect 3x1,rotate row y=2 by 12,rotate row y=0 by 5,rotate column x=0 by 1,rect 4x1,rotate column x=20 by 1,rotate row y=2 by 5,rotate row y=0 by 5,rotate column x=0 by 1,rect 4x1,rotate row y=2 by 15,rotate row y=0 by 15,rotate column x=10 by 1,rotate column x=5 by 1,rotate column x=0 by 1,rect 14x1,rotate column x=37 by 1,rotate column x=23 by 1,rotate column x=7 by 2,rotate row y=3 by 20,rotate row y=0 by 5,rotate column x=0 by 1,rect 4x1,rotate row y=3 by 5,rotate row y=2 by 2,rotate row y=1 by 4,rotate row y=0 by 4,rect 1x4,rotate column x=35 by 3,rotate column x=18 by 3,rotate column x=13 by 3,rotate row y=3 by 5,rotate row y=2 by 3,rotate row y=1 by 1,rotate row y=0 by 1,rect 1x5,rotate row y=4 by 20,rotate row y=3 by 10,rotate row y=2 by 13,rotate row y=0 by 10,rotate column x=5 by 1,rotate column x=3 by 3,rotate column x=2 by 1,rotate column x=1 by 1,rotate column x=0 by 1,rect 9x1,rotate row y=4 by 10,rotate row y=3 by 10,rotate row y=1 by 10,rotate row y=0 by 10,rotate column x=7 by 2,rotate column x=5 by 1,rotate column x=2 by 1,rotate column x=1 by 1,rotate column x=0 by 1,rect 9x1,rotate row y=4 by 20,rotate row y=3 by 12,rotate row y=1 by 15,rotate row y=0 by 10,rotate column x=8 by 2,rotate column x=7 by 1,rotate column x=6 by 2,rotate column x=5 by 1,rotate column x=3 by 1,rotate column x=2 by 1,rotate column x=1 by 1,rotate column x=0 by 1,rect 9x1,rotate column x=46 by 2,rotate column x=43 by 2,rotate column x=24 by 2,rotate column x=14 by 3,rotate row y=5 by 15,rotate row y=4 by 10,rotate row y=3 by 3,rotate row y=2 by 37,rotate row y=1 by 10,rotate row y=0 by 5,rotate column x=0 by 3,rect 3x3,rotate row y=5 by 15,rotate row y=3 by 10,rotate row y=2 by 10,rotate row y=0 by 10,rotate column x=7 by 3,rotate column x=6 by 3,rotate column x=5 by 1,rotate column x=3 by 1,rotate column x=2 by 1,rotate column x=1 by 1,rotate column x=0 by 1,rect 9x1,rotate column x=19 by 1,rotate column x=10 by 3,rotate column x=5 by 4,rotate row y=5 by 5,rotate row y=4 by 5,rotate row y=3 by 40,rotate row y=2 by 35,rotate row y=1 by 15,rotate row y=0 by 30,rotate column x=48 by 4,rotate column x=47 by 3,rotate column x=46 by 3,rotate column x=45 by 1,rotate column x=43 by 1,rotate column x=42 by 5,rotate column x=41 by 5,rotate column x=40 by 1,rotate column x=33 by 2,rotate column x=32 by 3,rotate column x=31 by 2,rotate column x=28 by 1,rotate column x=27 by 5,rotate column x=26 by 5,rotate column x=25 by 1,rotate column x=23 by 5,rotate column x=22 by 5,rotate column x=21 by 5,rotate column x=18 by 5,rotate column x=17 by 5,rotate column x=16 by 5,rotate column x=13 by 5,rotate column x=12 by 5,rotate column x=11 by 5,rotate column x=3 by 1,rotate column x=2 by 5,rotate column x=1 by 5,rotate column x=0 by 1",
];

const test = (data) => {
  const startResponse = () => {
    const baseArray = [];
    for (let i = 0; i < 6; i++) {
      baseArray.push([]);
      for (let j = 0; j < 50; j++) {
        baseArray[i].push("-");
      }
    }
    return baseArray;
  };

  const fillRectangle = (baseArray, rows, cols) => {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        baseArray[row][col] = "#";
      }
    }
    return baseArray;
  };

  const movePixels = (baseArray, direction, start, move) => {
    if (direction === "row") {
      const formattedMove = move % 50;
      for (let i = 0; i < formattedMove; i++) {
        const lastData = baseArray[start].pop();
        baseArray[start].unshift(lastData);
      }
    }
    if (direction === "column") {
      const formattedMove = move % 6;
      for (let i = 0; i < formattedMove; i++) {
        let dataToBeReplaced = "";
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

  const lines = data.split(",");
  let response = startResponse();
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const data = line.split(" ");
    if (data[0] === "rect") {
      const numbers = data[1].split("x");
      response = fillRectangle(response, numbers[1], numbers[0]);
    } else {
      const startValue = data[2].split("=")[1];
      response = movePixels(response, data[1], startValue, data[4]);
    }
  }

  for (let j = 0; j < response.length; j++) {
    const row = response[j];
    console.log(row.join(""));
  }
  return "";
};

module.exports = { testData, test };
