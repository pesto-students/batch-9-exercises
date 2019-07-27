
function pairwise(array, sum) {
  const usedIndices = [];
  let pairwiseSum = 0;
  for (let i = 0; i < array.length - 1; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === sum && !usedIndices.includes(i) && !usedIndices.includes(j)) {
        pairwiseSum += i + j;
        usedIndices.push(i, j);
      }
    }
  }
  return pairwiseSum;
}

export {
  pairwise,
};
