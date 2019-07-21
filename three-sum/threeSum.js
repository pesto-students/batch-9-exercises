function threeSum(array, target) {
  if (!Array.isArray(array)) {
    throw TypeError('Expected array as first argument, found ' + typeof array);
  }

  if (array.length < 3) {
    throw Error('The array should contain atleast three numbers');
  }

  if (typeof target !== 'number') {
    throw TypeError(
      'Second argument should be of type number, received  ' + typeof input
    );
  }

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      for (let k = i + 2; k < array.length; k++) {
        if (array[i] + array[j] + array[k] === target) {
          return [array[i], array[j], array[k]];
        }
      }
    }
  }

  return null;
}

export { threeSum };
