

const isNumberArray = array => array.every(Number);
const square = number => number ** 2;
function squareNumbersArray(...array) {
  if (!isNumberArray(array)) {
    throw new Error('My custom error');
  }
  return array.map(square);
}

export {
  squareNumbersArray,
};
