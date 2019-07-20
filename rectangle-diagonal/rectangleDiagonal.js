
const square = num => num * num;
function rectangleDiagonal(length, breadth) {
  const diagonal = Math.sqrt(square(length) + square(breadth));
  return diagonal;
}

export {
  rectangleDiagonal,
};
