function sumOfPerfectSquares(number) {
  if (number <= 3) {
    return number;
  }
  let result = number;
  for (let i = 1; i < (number + 1); i += 1) {
    const square = i ** 2;
    if (square > number) {
      break;
    } else {
      result = Math.min(result, (1 + sumOfPerfectSquares(number - square)));
    }
  }
  return result;
}

export {
  sumOfPerfectSquares,
};
