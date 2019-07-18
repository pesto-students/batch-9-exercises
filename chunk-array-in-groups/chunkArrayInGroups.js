// const array = ["a", "b", "c", "d"];
// const splitSize = 2;
function chunkArrayInGroups(array, splitSize) {
  let groupOfChunkedArray = [];
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
