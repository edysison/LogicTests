const path = process.argv[3] || './palindrom';

const runTest = () => {
  const { Test } = require(`./${path}`);
  const { Data } = require(`./${path}/data.js`);
  describe(`Running ${path} tests`, () => {
    Data.forEach((element) => {
      const input = element.input || element;
      const output = element.output;
      test(`Test ${
        output ? `with ${output} as` : 'without'
      } expected output`, () => {
        output
          ? expect(Test(input)).toBe(output)
          : console.log(`response: ${Test(input)}`);
      });
    });
  });
};

runTest();
