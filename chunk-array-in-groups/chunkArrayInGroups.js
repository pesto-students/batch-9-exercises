
function chunkArrayInGroups(flatArray, chunkSize) {
  const newArray = [];
  let index = 0;
  while (index < flatArray.length) {
    newArray.push(flatArray.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return newArray;
}

export {
  chunkArrayInGroups,
};
