
function largeOfFour(collectionOfArrays) {
  return collectionOfArrays.reduce((result, array) => [...result, Math.max(...array)], []);
}

export {
  largeOfFour,
};
