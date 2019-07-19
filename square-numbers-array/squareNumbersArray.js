/* eslint-disable */
function squareNumbersArray(...arr) {
  arr.forEach(element => {
    if (isNaN(element)) {
      throw Error(`Expected number got ${typeof element}`);
    }
  });

  return arr.map(el => el ** 2);
}
export { squareNumbersArray };
