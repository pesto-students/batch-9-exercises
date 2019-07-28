
function aperture(nestCount, array) {
  if (nestCount > array.length) {
    return [];
  }
  const iterations = array.length - nestCount;
  const newArray = [];
  for (let i = 0; i <= iterations; i += 1) {
    newArray.push(array.slice(i, i + nestCount));
  }
  return newArray;
}

export {
  aperture,
};
