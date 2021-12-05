const { md5 } = require('../md5');

// becarful while using recursions on logic tests
// str.substring(0, 5) === '00000'

const Test = (data) => {
  let counter = 0;
  const response = [];
  const regex = /^00000/gm;
  while (response.length < 8) {
    const testString = data + counter;
    const hash = md5(testString);
    if (regex.test(hash)) response.push(hash[5]);
    counter += 1;
  }
  return response.join('');
};

module.exports = { Test };
