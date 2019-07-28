
function splitEvery(chunkSize, array) {
  if (chunkSize < 1) {
    throw Error('chunkSize should be atleast 1');
  }
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, chunkSize + index));
    index += chunkSize;
  }
  return chunkedArr;
}

export {
  splitEvery,
};
