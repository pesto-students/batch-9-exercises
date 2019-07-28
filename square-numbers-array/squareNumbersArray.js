const isNumber = element => typeof element === 'number';

const isNumbersArray = (array) => {
  if (!Array.isArray(array)) {
    return false;
  }
  return array.every(isNumber);
};

const square = number => number ** 2;

function squareNumbersArray(...array) {
  if (!isNumbersArray(array)) {
    throw new TypeError('My custom error');
  }
  return array.map(square);
}

export {
  squareNumbersArray,
};
