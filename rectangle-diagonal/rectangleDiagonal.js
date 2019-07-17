const square = x => x ** 2;

function rectangleDiagonal(length, width) {
  const diagonal = Math.sqrt(square(length) + square(width));
  return diagonal;
}

export {
  rectangleDiagonal,
};
