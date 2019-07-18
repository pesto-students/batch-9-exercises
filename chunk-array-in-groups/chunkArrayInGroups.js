// const array = ["a", "b", "c", "d"];
// const splitSize = 2;
function chunkArrayInGroups(array, splitSize) {
  // let splitIndex = splitSize - 1;
  let groupOfChunkedArray = [];
  for (
    let splitIndex = 0;
    splitIndex <= array.length - 1;
    splitIndex += splitSize
  ) {
    // console.log(array.splice(splitIndex, splitIndex + splitSize - 1));
    groupOfChunkedArray = groupOfChunkedArray.concat(
      array.splice(splitIndex, splitIndex + splitSize - 1)
    );
  }
  console.log(groupOfChunkedArray);
  return groupOfChunkedArray;
}

// console.log(chunkArrayInGroups(array, splitSize));

export { chunkArrayInGroups };
