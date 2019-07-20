
function threeSum(array, sum) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected first argument to be array Received ${typeof array}`);
  }
  if (Number(sum)) {
    throw new TypeError(`Expected Second argument to number Received ${typeof sum}`);
  }
  const minimumLengthOfArray = 3;
  if (array.length < minimumLengthOfArray) {
    throw new Error(`Expected length of array ${minimumLengthOfArray} Received ${array.length}`);
  }

  const arrayLength = array.length;

  for (let firstNumberIndex = 0; firstNumberIndex < arrayLength; firstNumberIndex += 1) {
    const firstNumber = array[firstNumberIndex];
    // eslint-disable-next-line max-len
    for (let secondNumberIndex = firstNumberIndex + 1; secondNumberIndex < arrayLength; secondNumberIndex += 1) {
      const secondNumber = array[secondNumberIndex];
      // eslint-disable-next-line max-len
      for (let thirdNumberIndex = secondNumberIndex + 1; thirdNumberIndex < arrayLength; thirdNumberIndex += 1) {
        const thirdNumber = array[thirdNumberIndex];
        if (firstNumber + secondNumber + thirdNumber === sum) {
          return [firstNumber, secondNumber, thirdNumber];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
