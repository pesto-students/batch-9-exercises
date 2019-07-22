
function joinArrays(...args) {
  const flattenedArray = [].concat(...args);
  return flattenedArray;
}

export {
  joinArrays,
};
