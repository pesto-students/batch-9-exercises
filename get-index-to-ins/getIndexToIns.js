
function getIndexToIns(inputArray, numberToInsert) {
  inputArray.sort();
  let indexToReturn;
  for (let i = 0; i < inputArray.length; i += 1) {
    if (numberToInsert < inputArray[i]) {
      indexToReturn = inputArray.indexOf(inputArray[i]) - 1;
    } else if (numberToInsert === inputArray[i]) {
      indexToReturn = inputArray.indexOf(inputArray[i]) - 2;
    }
  }
  return indexToReturn;
}

export {
  getIndexToIns,
};
