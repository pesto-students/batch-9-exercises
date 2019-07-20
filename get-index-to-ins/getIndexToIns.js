
function getIndexToIns(array, numberToInsert) {
  const sortedArray = array.sort((a, b) => a - b);

  for (let index = 0; index < sortedArray.length; index += 1) {
    if (numberToInsert <= sortedArray[index]) {
      return index;
    }
  }

  return sortedArray.length;
}

export {
  getIndexToIns,
};
