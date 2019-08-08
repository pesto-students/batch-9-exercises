
function arrayAddition(array1, array2) {
  const zeroElementsCondition = array1.length === 0 || array2.length === 0;
  if (zeroElementsCondition) {
    throw Error('Expeccted: Arrays with at least one element\nReceived: One array is empty');
  }

  const isArray = Array.isArray(array1) && Array.isArray(array2);
  if (!isArray) {
    throw Error('Expected: Arrays');
  }

  const isNumeric = array => array.every(Number.isInteger);
  const areNumericArrays = isNumeric(array1) && isNumeric(array2);
  if (!areNumericArrays) {
    throw Error('Expected: Arrays with integers');
  }

  const [bigger, smaller] = array1.length > array2.length ? [array1, array2] : [array2, array1];
  return bigger.map((element, index) => element + (smaller[index] || 0));
}

export {
  arrayAddition,
};
