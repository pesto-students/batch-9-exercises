const isArray = array => Array.isArray(array);
const isNumber = value => typeof value === 'number';

function arrayAddition(array1, array2) {
  const checkArray = isArray(array1) && isArray(array2);
  const isNumberArray = array1.every(isNumber) && array2.every(isNumber);

  if (!checkArray) {
    throw Error(`Expected Array Arguments Received Array1 type  typeof ${array1} Array2 typeof ${array2}`);
  }
  if (!isNumberArray) {
    throw Error('Expected Array type of Numbers');
  }
  if (array1.length === 0 || array2.length === 0) {
    throw Error('Array should contain elements');
  }

  const [bigger, smalller] = array1.length >= array2.length ? [array1, array2] : [array2, array1];
  return bigger.map((num, index) => num + (smalller[index] || 0));
}

export {
  arrayAddition,
};
