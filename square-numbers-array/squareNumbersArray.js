
const square = number => number ** 2;

function squareNumbersArray(...array) {
  array.forEach((element) => {
    if (typeof element !== 'number') {
      throw Error('My custom error');
    }
  });
  return array.map(square);
}

export {
  squareNumbersArray,
};
