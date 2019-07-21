/* eslint-disable prefer-const */
/* eslint-disable no-shadow */
/* eslint-disable no-const-assign */
const findIndex = (array, sum) => {
  let index = [];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] + array[j] === sum && !index.includes(i) && !index.includes(j)) {
        index = [...index, i, j];
      }
    }
  }
  return index;
};


function pairwise(array, sum) {
  const indexSum = findIndex(array, sum).reduce((accum, value) => accum + value, 0);
  return indexSum;
}

export {
  pairwise,
};
