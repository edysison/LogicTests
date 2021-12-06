const Test = (depthList) => {
  const formattedDepth = [];
  for (let i = 0; i < depthList.length; i++) {
    const depth1 = depthList[i];
    const depth2 = depthList[i + 1];
    const depth3 = depthList[i + 2];
    if (depth3) formattedDepth.push(depth1 + depth2 + depth3);
  }
  return formattedDepth.reduce((accumulator, depth, index) => {
    const prevDepth = formattedDepth[index - 1];
    if (prevDepth && prevDepth < depth) return (accumulator += 1);
    return accumulator;
  }, 0);
};

module.exports = { Test };
