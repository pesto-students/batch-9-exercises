
function largeOfFour(array) {
  return array.map(value => Math.max.apply(null, value));
}

export {
  largeOfFour,
};
