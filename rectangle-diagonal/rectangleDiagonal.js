function rectangleDiagonal(length, breadth) {
  const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(breadth, 2));
  return diagonal;
}

export { rectangleDiagonal };
