const testToRun = require("./adventCode2016/bunnyHQDay9/first");

const runTest = () => {
  testToRun.testData.forEach((element) => {
    console.time("timer");
    const response = testToRun.test(element);
    console.timeEnd("timer");
    console.log("response: ", response);
  });
};

runTest();
