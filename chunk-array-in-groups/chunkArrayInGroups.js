
function chunkArrayInGroups(array, chunkSize) {
  const groupArray = [];
  let operatingIndex = 0;
  while (operatingIndex < array.length) {
    groupArray.push(array.slice(operatingIndex, operatingIndex + chunkSize));
    operatingIndex += chunkSize;
  }
  return groupArray;
}

export {
  chunkArrayInGroups,
};
