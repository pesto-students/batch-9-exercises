
function chunkArrayInGroups(argArray, arrayLength) {
  let chunkedArray = [];
  let i = 0;
  while (i < argArray.length) {
    chunkedArray.push(argArray.slice(i, i + arrayLength));
    i += arrayLength;
  }
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
