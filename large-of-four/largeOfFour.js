const largerNumberInArray = (numberArray) => {
  const sortedNumberArray = numberArray.sort((a, b) => b - a);
  return sortedNumberArray[0];
};

function largeOfFour(numberArrays) {
  return numberArrays.map(numberArray => largerNumberInArray(numberArray));
}

export {
  largeOfFour,
};
