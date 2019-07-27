function permutateWithRepetitions(originalArray, length = originalArray.length) {
  if (length === 1) {
    return originalArray.map(element => [element]);
  }

  const permutations = [];

  const nextPermutation = permutateWithRepetitions(
    originalArray,
    length - 1,
  );
  for (let i = 0; i < originalArray.length; i += 1) {
    for (let j = 0; j < nextPermutation.length; j += 1) {
      permutations.push([originalArray[i]].concat(nextPermutation[j]));
    }
  }
  return permutations;
}

export {
  permutateWithRepetitions,
};
