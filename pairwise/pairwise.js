function getPairIndices(array, sum) {
  let usedIndexes = [];

  for (let index1 = 0; index1 < array.length; index1 += 1) {
    for (let index2 = index1 + 1; index2 < array.length; index2 += 1) {
      if (array[index1] + array[index2] === sum
        && !usedIndexes.includes(index1)
        && !usedIndexes.includes(index2)) {
        usedIndexes = [...usedIndexes, index1, index2];
      }
    }
  }
  return usedIndexes;
}
function pairwise(array, sum) {
  const sumIndices = getPairIndices(array, sum).reduce((result, number) => result + number, 0);
  return sumIndices;
}

export {
  pairwise,
};
