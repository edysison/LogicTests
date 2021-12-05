const { md5 } = require('../md5');

// read the exercise

const Test = (data) => {
  let counter = 0;
  let responseTrueLength = 0;
  const response = [];
  const regex = /^00000/gm;
  while (responseTrueLength < 8) {
    const testString = data + counter;
    const hash = md5(testString);
    if (regex.test(hash)) {
      if (parseInt(hash[5], 10) < 8) {
        if (!response[hash[5]]) {
          responseTrueLength += 1;
          response[hash[5]] = hash[6];
        }
      }
    }
    counter += 1;
  }
  return response.join('');
};

module.exports = { Test };
