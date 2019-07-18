function chunkArrayInGroups(array, chunkSize) {
  const copyOfArray = array.slice();
  const chunkedArr = [];
  let chunk;
  while (copyOfArray.length > 0) {
    chunk = copyOfArray.splice(0, chunkSize);
    chunkedArr.push(chunk);
  }
  return chunkedArr;
}

export { chunkArrayInGroups };
