function getGCD(num1, num2) {
  return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
}
function getLCM(num1, num2) {
  return (num1 * num2) / getGCD(num1, num2);
}
function smallestCommons(range) {
  let [lowerBound, upperBound] = range;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  let i = lowerBound;
  let smallestCommon = lowerBound;
  while (i <= upperBound) {
    smallestCommon = getLCM(smallestCommon, i);
    i += 1;
  }
  return smallestCommon;
}

export {
  smallestCommons,
};
