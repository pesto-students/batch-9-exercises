
function isTriangle(...sides) {
  const [side, biggerSide, biggestSide] = sides.sort();
  return side + biggerSide >= biggestSide;
}

export {
  isTriangle,
};
