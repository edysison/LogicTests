const testData = [
  ["R21", "L32"],
  ["R2", "R2", "R2"],
  ["R5", "L5", "R5", "R3"],
  [
    "R4",
    "R4",
    "L1",
    "R3",
    "L5",
    "R2",
    "R5",
    "R1",
    "L4",
    "R3",
    "L5",
    "R2",
    "L3",
    "L4",
    "L3",
    "R1",
    "R5",
    "R1",
    "L3",
    "L1",
    "R3",
    "L1",
    "R2",
    "R2",
    "L2",
    "R5",
    "L3",
    "L4",
    "R4",
    "R4",
    "R2",
    "L4",
    "L1",
    "R5",
    "L1",
    "L4",
    "R4",
    "L1",
    "R1",
    "L2",
    "R5",
    "L2",
    "L3",
    "R2",
    "R1",
    "L194",
    "R2",
    "L4",
    "R49",
    "R1",
    "R3",
    "L5",
    "L4",
    "L1",
    "R4",
    "R2",
    "R1",
    "L5",
    "R3",
    "L5",
    "L4",
    "R4",
    "R4",
    "L2",
    "L3",
    "R78",
    "L5",
    "R4",
    "R191",
    "R4",
    "R3",
    "R1",
    "L2",
    "R1",
    "R3",
    "L1",
    "R3",
    "R4",
    "R2",
    "L2",
    "R1",
    "R4",
    "L5",
    "R2",
    "L2",
    "L4",
    "L2",
    "R1",
    "R2",
    "L3",
    "R5",
    "R2",
    "L3",
    "L3",
    "R3",
    "L1",
    "L1",
    "R5",
    "L4",
    "L4",
    "L2",
    "R5",
    "R1",
    "R4",
    "L3",
    "L5",
    "L4",
    "R5",
    "L4",
    "R5",
    "R4",
    "L3",
    "L2",
    "L5",
    "R4",
    "R3",
    "L3",
    "R1",
    "L5",
    "R5",
    "R1",
    "L3",
    "R2",
    "L5",
    "R5",
    "L3",
    "R1",
    "R4",
    "L5",
    "R4",
    "R2",
    "R3",
    "L4",
    "L5",
    "R3",
    "R4",
    "L5",
    "L5",
    "R4",
    "L4",
    "L4",
    "R1",
    "R5",
    "R3",
    "L1",
    "L4",
    "L3",
    "L4",
    "R1",
    "L5",
    "L1",
    "R2",
    "R2",
    "R4",
    "R4",
    "L5",
    "R4",
    "R1",
    "L1",
    "L1",
    "L3",
    "L5",
    "L2",
    "R4",
    "L3",
    "L5",
    "L4",
    "L1",
    "R3",
  ],
];

const test = (
  instructions,
  starterPositon = [0, 0],
  starterDirection = "north"
) => {
  const baseDirections = {
    north: {
      baseOperator: "x",
      rightMultiplier: 1,
      right: "east",
      leftMultiplier: -1,
      left: "west",
    },
    east: {
      baseOperator: "y",
      rightMultiplier: -1,
      right: "south",
      leftMultiplier: 1,
      left: "north",
    },
    west: {
      baseOperator: "y",
      rightMultiplier: 1,
      right: "north",
      leftMultiplier: -1,
      left: "south",
    },
    south: {
      baseOperator: "x",
      rightMultiplier: -1,
      right: "west",
      leftMultiplier: 1,
      left: "east",
    },
  };

  let position = starterPositon;
  let facedDirection = starterDirection;
  instructions.forEach((instruction) => {
    const turnTo = instruction[0];
    const steps = parseInt(instruction.substring(1), 10);
    const operator =
      baseDirections[facedDirection].baseOperator === "x" ? 0 : 1;

    if (turnTo === "R") {
      position[operator] =
        baseDirections[facedDirection].rightMultiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].right;
    }
    if (turnTo === "L") {
      position[operator] =
        baseDirections[facedDirection].leftMultiplier * steps +
        position[operator];
      facedDirection = baseDirections[facedDirection].left;
    }
  });

  return Math.abs(position[0]) + Math.abs(position[1]);
};

module.exports = { testData, test };
