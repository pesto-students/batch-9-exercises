
function splitEvery(splitCount, iterableObj) {
  if (splitCount < 1) {
    throw new Error(`Expected split count > 1. Received split count:${splitCount}`);
  }
  const tempArr = [];
  let splitFrom = 0;
  let numberOfChunks = Math.ceil(iterableObj.length / splitCount);

  while (numberOfChunks > 0) {
    const splitUpto = splitFrom + splitCount;
    const currentChunk = iterableObj.slice(splitFrom, splitUpto);
    tempArr.push(currentChunk);
    splitFrom = splitUpto;
    numberOfChunks -= 1;
  }

  return tempArr;
}

export {
  splitEvery,
};
