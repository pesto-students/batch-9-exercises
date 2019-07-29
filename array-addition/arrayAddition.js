const isNumber = (num) => {
  if (num === null || num === undefined || Number.isNaN(num)) {
    return false;
  }
  return typeof num === 'number';
};
function arrayAddition(array1, array2) {
  const areBothArrays = Array.isArray(array1) && Array.isArray(array2);
  if (!areBothArrays) {
    throw TypeError(`Expected Parameters be arrays. \n Received Array 1 of type: ${typeof array1} and Array 2 of type: ${typeof array2}`);
  }

  const bothHaveElements = array1.length > 0 && array2.length > 0;
  if (!bothHaveElements) {
    throw TypeError(`Expected Parameters be have some elements. \n Received Array 1 of length: ${array1.length} and Array 2 of length: ${array2.length}`);
  }

  const bothArraysHasOnlyNumbers = array1.every(isNumber) && array2.every(isNumber);
  if (!bothArraysHasOnlyNumbers) {
    throw TypeError(` Expected arrays to have only numbers \n Received Array1: ${array1} and Array2: ${array2}`);
  }

  const [bigArr, smallArr] = array1.length > array2.length ? [array1, array2] : [array2, array1];

  const addedArrays = bigArr.map((element, index) => element + (smallArr[index] || 0));

  return addedArrays;
}

export {
  arrayAddition,
};
