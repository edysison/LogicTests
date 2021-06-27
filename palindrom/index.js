const testData = [
  "ama",
  "mirim",
  "reviver",
  "osso",
  "omississimo",
  "reler",
  "martelo",
];

const test = (data) => {
  let middle = Math.floor(data.length / 2);
  for (let i = 0; i < middle; i++) {
    const element = data[i];
    const mirrored = data[data.length - (i + 1)];
    if (element !== mirrored) return -1;
  }
  return 1;
};

module.exports = { testData, test };
