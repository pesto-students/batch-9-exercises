
function reject(filterFunction, array) {
  const result = array.filter(val => !filterFunction(val));
  return result;
}

export {
  reject,
};
