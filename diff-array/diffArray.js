const uniqueElements = (array1, array2) => array1.filter(item => !array2.includes(item));

function diffArray(array1, array2) {
  const array1Unique = uniqueElements(array1, array2);
  const array2Unique = uniqueElements(array2, array1);
  return [...array1Unique, ...array2Unique];
}

export {
  diffArray,
};
