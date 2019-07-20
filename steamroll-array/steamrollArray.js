
function steamrollArray(array) {
  return array.reduce((flat, element) => flat.concat(Array.isArray(element) ? steamrollArray(element) : element), []);
}

export {
  steamrollArray,
};
