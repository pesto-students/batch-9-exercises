
function isTriangle(...sides) {
  const [side1, side2, side3] = sides.sort();
  return side1 + side2 > side3;
}

export {
  isTriangle,
};
