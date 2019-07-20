const sum = first => second => first + second;

function pairwise(array, target) {
  let total = 0;
  let used = [];
  for (let i = 0; i < array.length; i++) {
    const firstNum = sum(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      const sum = firstNum(array[j]);
      if (sum === target && !used.includes(i) && !used.includes(j)) {
        total = total + i + j;
        used.push(i, j);
      }
    }
  }
  return total;
}

export {
  pairwise,
};
