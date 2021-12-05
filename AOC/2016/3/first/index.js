const Test = (data) => {
  const lines = data.split(',');
  const response = lines.filter((line) => {
    const numbers = line.split('  ');
    numbers.sort((a, b) => a - b);
    return parseInt(numbers[0]) + parseInt(numbers[1]) > parseInt(numbers[2]);
  });
  return response.length;
};

module.exports = { Test };
