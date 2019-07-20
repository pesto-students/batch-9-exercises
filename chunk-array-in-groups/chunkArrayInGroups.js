
function chunkArrayInGroups(arr, chunkSize) {
  const initalArr = [[]];
  let chunkIndex = 0;
  const numberOfChunks = Math.ceil(arr.length / chunkSize);
  const chunkedArr = arr.reduce((accumulator, currentValue) => {
    accumulator[chunkIndex].push(currentValue);
    if (accumulator[chunkIndex].length === chunkSize && accumulator.length < numberOfChunks) {
      chunkIndex += 1;
      accumulator[chunkIndex] = [];
    }
    return accumulator;
  }, initalArr);
  return chunkedArr;
}

export {
  chunkArrayInGroups,
};
