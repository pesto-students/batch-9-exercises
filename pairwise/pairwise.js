
function pairwise(array, sum) {
  let usedIndices = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === sum
        && !usedIndices.includes(i)
        && !usedIndices.includes(j)) {
        usedIndices = [...usedIndices, i, j];
      }
    }
  }
  return usedIndices.reduce((a, b) => a + b, 0);
}

export {
  pairwise,
};
