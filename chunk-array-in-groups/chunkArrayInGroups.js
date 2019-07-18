
function chunkArrayInGroups(...args) {
  const array = args[0];
  const chunkSize = args[1];
  const newArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    newArray.push(array.slice(i, i + chunkSize));
  }
  return newArray;
}

export {
  chunkArrayInGroups,
};
