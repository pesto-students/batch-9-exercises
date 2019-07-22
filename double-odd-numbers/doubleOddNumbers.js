const isOdd = number => number % 2 !== 0;
const doubleTheArray = number => number * 2;

function doubleOddNumbers(array) {
  const oddElementArray = array.filter(isOdd);
  return oddElementArray.map(doubleTheArray);
}

export {
  doubleOddNumbers,
};
