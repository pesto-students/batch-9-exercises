
const isOdd = number => number % 2 === 1;

const oddNumbers = array => array.filter(isOdd);

const double = number => number * 2;

function doubleOddNumbers(array) {
  return oddNumbers(array).map(double);
}

export {
  doubleOddNumbers,
};
