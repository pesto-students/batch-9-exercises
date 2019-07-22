function chunkArrayInGroups(array, splitSize) {
  const groupOfChunkedArray = [];
  for (
    let splitIndex = 0;
    splitIndex <= array.length - 1;
    splitIndex += splitSize
  ) {
    groupOfChunkedArray.push(array.slice(splitIndex, splitIndex + splitSize));
  }
  return groupOfChunkedArray;
}

export { chunkArrayInGroups };
