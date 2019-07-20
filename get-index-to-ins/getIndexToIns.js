const sortAscending = (a, b) => a - b;

function getIndexToIns(array, number) {
  const sortedArray = array.sort(sortAscending);
  let index = sortedArray.findIndex(element => element >= number);
  if (index < 0) {
    index = array.length;
  }
  return index;
}
export {
  getIndexToIns,
};
