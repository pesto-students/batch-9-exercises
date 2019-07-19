
function isTriangle(sideA, sideB, sideC) {
  return ((sideA + sideB > sideC) && (sideB + sideC > sideA) && (sideA + sideC > sideB));
}

export {
  isTriangle,
};
