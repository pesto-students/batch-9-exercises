
function joinArrays(...arrays) {
  return [...arrays].reduce((acc, element) => acc.concat(element), []);
}

export {
  joinArrays,
};
