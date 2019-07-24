
function searchSortedMatrix({ search, matrix }) {
  const flatArray = matrix.reduce((accumulator, current) => [...accumulator, ...current], []);
  return Boolean(flatArray.find(element => element === search));
}

export {
  searchSortedMatrix,
};
