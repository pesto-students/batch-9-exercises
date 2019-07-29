function sumOfPerfectSquares(number) {
  const lastPerfectSquare = Math.floor(Math.sqrt(number));
  if (number <= 3) {
    return number;
  }

  let result = number;

  for (let i = 1; i <= lastPerfectSquare; i++) {
    const temp = i * i;
    result = Math.min(result, 1 + sumOfPerfectSquares(number - temp));
  }
  return result;
}

export { sumOfPerfectSquares };
