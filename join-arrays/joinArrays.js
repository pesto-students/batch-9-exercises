
function joinArrays(...nestedArray) {
  return nestedArray.reduce((accumulator, array) => accumulator.concat(array), []);
}

export {
  joinArrays,
};
