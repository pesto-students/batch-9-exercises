
function joinArrays(nestedArray) {
  return nestedArray.reduce((accumulator, array) => [...accumulator, ...array], []);
}

export {
  joinArrays,
};
