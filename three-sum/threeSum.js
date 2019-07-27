function threeSum(array, sum) {
  if (array.length < 3) {
    throw new Error('Array should have at least 3 elements');
  }
  if (typeof sum !== 'number') {
    throw new TypeError(`Sum should be of type Number. Received: ${typeof sum}`);
  }
  for (let i = 0; i < array.length - 2; i += 1) {
    const firstNumber = array[i];
    for (let j = i + 1; j < array.length - 1; j += 1) {
      const secondNumber = array[j];
      for (let k = j + 1; k < array.length; k += 1) {
        const thirdNumber = array[k];
        if (sum === firstNumber + secondNumber + thirdNumber) {
          return [firstNumber, secondNumber, thirdNumber];
        }
      }
    }
  }
  return null;
}

export { threeSum };
