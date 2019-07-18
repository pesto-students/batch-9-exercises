
function rectangleDiagonal(length, width) {
  const square = number => number * number;
  const diagonal = Math.sqrt(square(length) + square(width));
  return diagonal;
}

export {
  rectangleDiagonal,
};
