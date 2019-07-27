
function squareNumbersArray(...array) {

const isArrayNumber = array => array.every(Number);
const numberSquare = number => number ** 2;

  if (!isArrayNumber(array)) {
    throw new Error('My custom error');
  }
  return array.map(numberSquare);
}

export {
  squareNumbersArray,
};
