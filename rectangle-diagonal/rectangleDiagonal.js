/* eslint-disable no-restricted-properties */
const square = number => Math.pow(number, 2);
function rectangleDiagonal(length, width) {
  const diagonal = Math.sqrt(square(length) + square(width));
  return diagonal;
}

export {
  rectangleDiagonal,
};
