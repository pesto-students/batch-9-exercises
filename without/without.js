const checkEquality = (val1, val2) => {
  const valueAndSignEqual = val1 === val2 && Math.sign(val1) === Math.sign(val2);
  return valueAndSignEqual;
};
const exists = (arr, val) => arr.findIndex(currentValue => checkEquality(currentValue, val)) > -1;
function without(arr1, arr2) {
  const result = arr2.filter(val => !exists(arr1, val));
  return result;
}

export {
  without,
};
