import { FORMERR } from 'dns';

function pairwise(array, sum) {
  let usedIndexesInArray = [];

  for (let i = 0; i < array.length; i++) {
    // if (usedIndexesInArray.includes(i)) {
    //   continue;
    // }
    for (let j = i + 1; j < array.length; j++) {
      // if (usedIndexesInArray.includes(j)) {
      //   continue;
      // }
      if (
        array[i] + array[j] === sum &&
        !usedIndexesInArray.includes(i) &&
        !usedIndexesInArray.includes(j)
      ) {
        usedIndexesInArray = [...usedIndexesInArray, i, j];
      }
    }
  }
  return usedIndexesInArray.reduce(
    (indexTotal, index) => indexTotal + index,
    0
  );
}

export { pairwise };
