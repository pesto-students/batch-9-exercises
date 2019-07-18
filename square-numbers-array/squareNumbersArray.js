
function isArrayNumeric(array) {
  return array.every(Number);
}
function squareNumbersArray(...args) {
  if (!isArrayNumeric([...args])) {
    throw Error('Array contains non-numeric values');
  }
  return [...args].map(el => Math.pow(el, 2));
}
export {
  squareNumbersArray,
};
