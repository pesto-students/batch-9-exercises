function threeSum(array, targetNumber) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected first argument type: Array, Received: ${typeof array}`);
  }
  if (array.length < 3) {
    throw new Error(`Expected: Array of length >= 3, Received: Array of length ${array.length}`);
  }
  if (typeof targetNumber !== 'number') {
    throw new TypeError(`Expected: Second argument of type Number, Received: ${typeof targetNumber}`);
  }
  for (let i = 0; i < array.length - 3; i += 1) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length - 2; j += 1) {
      const secondNumber = array[j];
      for (let k = j + 1; k <= array.length - 1; k += 1) {
        const thirdNumber = array[k];
        const sum = firstNumber + secondNumber + thirdNumber;
        if (sum === targetNumber) {
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
