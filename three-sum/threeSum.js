
function threeSum(array, sum) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected first argument to be array. Received ${typeof array}`);
  }
  if (!Number(sum)) {
    throw new TypeError(`Expected Second argument to number. Received ${typeof sum}`);
  }
  const minimumLengthOfArray = 3;
  if (array.length < minimumLengthOfArray) {
    throw new Error(`Expected length of array ${minimumLengthOfArray} Received ${array.length}`);
  }
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i += 1) {
    for (let j = i + 1; j < arrayLength; j += 1) {
      for (let k = j + 1; j < arrayLength; k += 1) {
        if (array[i] + array[j] + array[k] === sum) {
          return [array[i], array[j], array[k]];
        }
      }
    }
  }
  return null;
}

export {
  threeSum,
};
