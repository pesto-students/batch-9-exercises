const uniqueItems = (primaryArray, secondaryArray) => primaryArray
  .filter(item => !secondaryArray.includes(item));

function diffArray(array1, array2) {
  const array1UniqueItems = uniqueItems(array1, array2);
  const array2UniqueItems = uniqueItems(array2, array1);
  return [...array1UniqueItems, ...array2UniqueItems];
}

export {
  diffArray,
};
