const Test = (depthList) => {
  return depthList.reduce((accumulator, depth, index) => {
    const prevDepth = depthList[index - 1];
    if (prevDepth && prevDepth < depth) return (accumulator += 1);
    return accumulator;
  }, 0);
};

module.exports = { Test };
