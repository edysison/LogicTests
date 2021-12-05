const Test = (data) => {
  const response = [];
  const lines = data.split(',');
  const totalRows = Math.floor(lines.length / 3);
  let count = 0;
  for (let row = 0; row < totalRows; row++) {
    for (let col = 0; col < 3; col++) {
      const triangle = [
        parseInt(lines[0 + count].split('  ')[col], 10),
        parseInt(lines[1 + count].split('  ')[col], 10),
        parseInt(lines[2 + count].split('  ')[col], 10),
      ];
      triangle.sort((a, b) => a - b);
      if (triangle[0] + triangle[1] > triangle[2]) response.push(triangle);
    }
    count += 3;
  }
  return response.length;
};

module.exports = { Test };
