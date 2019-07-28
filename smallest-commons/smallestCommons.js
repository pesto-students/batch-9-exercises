
function greatestCommon(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return greatestCommon(num2, num1 % num2);
}

function getLCM(num1, num2) {
  const lcmDividend = num1 * num2;
  const lcmDivisor = greatestCommon(num1, num2);
  const lcm = lcmDividend / lcmDivisor;
  return lcm;
}
function smallestCommons(range) {
  const lowerBound = range[0] > range[1] ? range[1] : range[0];
  const upperBound = range[0] < range[1] ? range[1] : range[0];
  let smallestCommonMultiple = lowerBound;
  for (let i = lowerBound + 1; i <= upperBound; i += 1) {
    smallestCommonMultiple = getLCM(smallestCommonMultiple, i);
  }
  return smallestCommonMultiple;
}

export {
  smallestCommons,
};
