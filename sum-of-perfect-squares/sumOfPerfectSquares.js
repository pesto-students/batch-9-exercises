
function sumOfPerfectSquares(number) {
  if (number <= 3) {
    return number;
  }
  let result = number;
  for (let i = 1; i <= number; i += 1) {
    const temp = i ** 2;
    if (temp > number) {
      break;
    }
    result = Math.min(result, 1 + sumOfPerfectSquares(number - temp));
  }
  return result;
}

export {
  sumOfPerfectSquares,
};
