
function dropElements(array, condition) {
  const newArray = array.filter(condition);
  return newArray;
}

export {
  dropElements,
};
