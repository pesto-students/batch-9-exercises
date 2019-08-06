
function threeSum(array, number) {
  if (!Array.isArray(array)) {
    throw new Error(`Expected: Array, Received: ${array}`);
  }
  if (array.length < 3) {
    throw new Error(`Expected length of array 3, Received ${array.length}`);
  }
  if (!Number.isInteger(number)) {
    throw new Error(`Expected: Integer, Received: ${typeof number}`);
  }
  for (let i = 0; i < array.length; i += 1) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length; j += 1) {
      const secondNumber = array[j];
      for (let k = j + 1; k < array.length; k += 1) {
        const thirdNumber = array[k];
        if (firstNumber + secondNumber + thirdNumber === number) {
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
