
function chunkArrayInGroups(array, chunkSize) {
  const newArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    newArray.push(array.slice(i, i + chunkSize));
  }
  return newArray;
}

export {
  chunkArrayInGroups,
};
