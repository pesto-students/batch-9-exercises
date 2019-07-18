

const isNotNumberArray = array => array.some(Number.isNaN);
const square = number => number ** 2;
function squareNumbersArray(...array) {
  if (isNotNumberArray(array)) {
    throw Error('My custom error');
  }
  return array.map(square);
}

export {
  squareNumbersArray,
};
