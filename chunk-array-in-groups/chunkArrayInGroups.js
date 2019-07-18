
function chunkArrayInGroups(array, size) {
  const chunkedArray = [];
  let index = 0;
  while (index < array.length) {
    chunkedArray.push(array.slice(index, index + size));
    index += size;
  }
  return chunkedArray;
}

export {
  chunkArrayInGroups,
};
