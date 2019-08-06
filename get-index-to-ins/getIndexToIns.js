
function getIndexToIns(inputArray, numberToInsert) {
  const sortedArray = inputArray.sort((a, b) => a - b);
  console.log(sortedArray);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (numberToInsert <= sortedArray[i]) {
      return i;
    }
  }
  return inputArray.length;
}

export {
  getIndexToIns,
};
