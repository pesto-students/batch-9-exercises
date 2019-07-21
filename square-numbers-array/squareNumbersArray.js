const square = number => number ** 2;
const isNumberArray = array => array.every(Number);

function squareNumbersArray(...array) {
  if (!isNumberArray(array)) {
    throw Error('My custom error');
  }
  return array.map(square);
}

export {
  squareNumbersArray,
};
