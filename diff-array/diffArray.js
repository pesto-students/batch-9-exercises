const unique = (array1, array2) => array1.filter(item => !array2.includes(item));
function diffArray(array1, array2) {
  const uniqueArray1 = unique(array1, array2);
  const uniqueArray2 = unique(array2, array1);
  return [...uniqueArray1, ...uniqueArray2];
}

export {
  diffArray,
};
