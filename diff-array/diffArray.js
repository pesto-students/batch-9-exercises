
function diffArray(firstArray, secondArray) {
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new TypeError(`Expected: array and array, Received: ${typeof firstArray} and ${typeof secondArray}`);
  }
  const firstMinusSecond = firstArray.filter(element => !secondArray.includes(element));
  const secondMinusFirst = secondArray.filter(element => !firstArray.includes(element));
  const differenceArray = firstMinusSecond.concat(secondMinusFirst);
  return differenceArray;
}

export {
  diffArray,
};
