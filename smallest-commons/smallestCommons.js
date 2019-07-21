
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
  let smallestCommonMultiple = lowerBound;
  while (lowerBound <= upperBound) {
    smallestCommonMultiple = getLCM(smallestCommonMultiple, lowerBound);
    lowerBound += 1;
  }
  return smallestCommonMultiple;
}

export {
  smallestCommons,
};
