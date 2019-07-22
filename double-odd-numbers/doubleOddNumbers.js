/* eslint-disable no-restricted-globals */
function isOddNumber(num) {
  if (isNaN(num)) {
    throw new Error(`Expected Type of num: Number. \n Received:${typeof num}`);
  }

  return (num % 2 === 1);
}
function hasOnlyNumbers(arr) {
  const notANumberIndex = arr.findIndex(val => isNaN(val));
  if (notANumberIndex > -1) {
    throw new Error(`Expected every element to be number. Array has ${typeof arr[notANumberIndex]} at position ${notANumberIndex}`);
  } else {
    return true;
  }
}
function doubleOddNumbers(arr) {
  const initialArray = [];
  hasOnlyNumbers(arr);
  const result = arr.reduce((tempArray, currentvalue) => {
    if (isOddNumber(currentvalue)) {
      const twiceOfCurrentNumber = 2 * currentvalue;
      tempArray.push(twiceOfCurrentNumber);
    }
    return tempArray;
  }, initialArray);

  return result;
}
export {
  doubleOddNumbers,
};
