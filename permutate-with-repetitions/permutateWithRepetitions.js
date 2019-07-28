
function permutateWithRepetitions(array, length = array.length) {
  if (length === 1) {
    return array.map(char => [char]);
  }
  const permutations = [];
  const smallerPermutations = permutateWithRepetitions(array, length - 1);

  array.forEach((currentOption) => {
    smallerPermutations.forEach((smallerPermutation) => {
      permutations.push([currentOption].concat(smallerPermutation));
    });
  });

  return permutations;
}


export {
  permutateWithRepetitions,
};
