
function joinArrays(...arrays) {
  return arrays.reduce((acc, val) => acc.concat(...val), []);
}

export {
  joinArrays,
};
