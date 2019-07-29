
function isTriangle(firstSide, secondSide, thirdSide) {
  return ((firstSide + secondSide > thirdSide) && (secondSide + thirdSide > firstSide) && (firstSide + thirdSide > secondSide));
}

export {
  isTriangle,
};
