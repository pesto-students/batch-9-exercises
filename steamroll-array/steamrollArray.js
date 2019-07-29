function steamrollArray(array) {
  if (!Array.isArray(array)) {
    return [array];
  }
  let newArray = [];
  for (const value of array) {
    newArray = newArray.concat(steamrollArray(value));
  }
  return newArray;
}

export {
  steamrollArray,
};
