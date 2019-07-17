
function diffArray(firstArray, secondArray) {
  const uniqueElementsOfFirstArray = firstArray.filter(value => !secondArray.includes(value));
  const uniqueElementsOfSecondArray = secondArray.filter(value => !firstArray.includes(value));
  return uniqueElementsOfFirstArray.concat(uniqueElementsOfSecondArray);
}

export {
  diffArray,
};
