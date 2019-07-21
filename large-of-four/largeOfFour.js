/* eslint-disable no-shadow */
const findLargeNumber = (array) => {
  const sortedArray = array.sort((a, b) => b - a);
  return sortedArray[0];
};
function largeOfFour(arrays) {
  return arrays.map(arrays => findLargeNumber(arrays));
}

export {
  largeOfFour,
};
