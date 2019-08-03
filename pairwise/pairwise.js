const sum = number1 => number2 => number1 + number2;

const strictTypeCheck = value => Object.prototype.toString.call(value)
  .slice(8, -1);

function pairwise(array, targetNumber) {
  if (strictTypeCheck(array) !== 'Array') {
    throw new TypeError(`Expected: Array as first argument, Received: ${array}`);
  }
  if (strictTypeCheck(targetNumber) !== 'Number') {
    throw new TypeError(`Expected: Number as second argument, Received: ${targetNumber}`);
  }
  let sumOfIndices = 0;
  const pairs = [];
  for (let i = 0; i < array.length; i += 1) {
    const sumWithFirst = sum(array[i]);
    for (let j = i + 1; j < array.length; j += 1) {
      const sumOfNumbers = sumWithFirst(array[j]);
      if (sumOfNumbers === targetNumber) {
        if (!pairs.includes(i) && !pairs.includes(j)) {
          sumOfIndices += i + j;
          pairs.push(i, j);
        }
      }
    }
  }
  return sumOfIndices;
}

export {
  pairwise,
};
