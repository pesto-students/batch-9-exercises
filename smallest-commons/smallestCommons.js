/* eslint-disable no-param-reassign */
function findGCD(number1, number2) {
  while (number2) {
    const temp = number2;
    number2 = number1 % number2;
    number1 = temp;
  }
  return number1;
}

function findLCM(num1, num2) {
  return (num1 * num2) / findGCD(num1, num2);
}

function smallestCommons(range) {
  range = range.sort((a, b) => a - b);
  const [lowerLimit, upperLimit] = range;
  let i = lowerLimit;
  let smallestCommon = lowerLimit;
  while (i <= upperLimit) {
    smallestCommon = findLCM(smallestCommon, i);
    i += 1;
  }
  return smallestCommon;
}

export {
  smallestCommons,
};
