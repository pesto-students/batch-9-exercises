const isNumber = value => typeof (value) === 'number';
const validation = (element) => {
  if (!Array.isArray(element)) {
    throw TypeError(`Expected Array, received ${typeof element}`);
  }

  if (!element.length) {
    throw Error('Array should contain at least one item');
  }

  const isNumericArray = element.every(isNumber);
  if (!isNumericArray) {
    throw TypeError('All elements of Array should be numeric');
  }
  return true;
};
function arrayAddition(array1, array2) {
  validation(array1);
  validation(array2);
  const [bigger, smaller] = array1.length >= array2.length ? [array1, array2] : [array2, array1];
  return bigger.map((num, index) => num + (smaller[index] || 0));
}

export {
  arrayAddition,
};
