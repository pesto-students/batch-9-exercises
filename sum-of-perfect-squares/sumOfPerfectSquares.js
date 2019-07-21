
function sumOfPerfectSquares(number) {
  let result = number;
  if (number <= 3) {
    return number;
  }
  for (let i = 1; i < number + 1; i += 1) {
    const temp = i * i;
    if (temp > number) {
      break;
    } else {
      result = Math.min(result, 1 + sumOfPerfectSquares(number - temp));
    }
  }
  return result;
}

export {
  sumOfPerfectSquares,
};
