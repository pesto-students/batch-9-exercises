function findAllCombinations(smallerPermutations, firstOption) {
  const permutations = [];

  for (let permIndex = 0; permIndex < smallerPermutations.length; permIndex += 1) {
    const smallerPermutation = smallerPermutations[permIndex];
    // Insert first option into every possible position of smallerPermutation.
    for (let positionIndex = 0; positionIndex <= smallerPermutation.length; positionIndex += 1) {
      const permutationPrefix = smallerPermutation.slice(0, positionIndex);
      const permutationSuffix = smallerPermutation.slice(positionIndex);
      permutations.push(permutationPrefix.concat([firstOption], permutationSuffix));
    }
  }

  return permutations;
}
function permutateWithoutRepetitions(permutationOptions) {
  if (permutationOptions.length === 1) {
    return [permutationOptions];
  }

  const smallerPermutations = permutateWithoutRepetitions(permutationOptions.slice(1));
  const firstOption = permutationOptions[0];

  return findAllCombinations(smallerPermutations, firstOption);
}

export {
  permutateWithoutRepetitions,
};
