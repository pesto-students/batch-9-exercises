
function isTriangle(...sides) {
  const [shortestSide, biggerSide, biggestSide] = sides.sort((a, b) => a - b);
  return shortestSide + biggerSide > biggestSide;
}

export {
  isTriangle,
};
