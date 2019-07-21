function sumOfPerfectSquares(number) {
  if (Math.sqrt(number) - Math.floor(Math.floor(number)) === 0) return 1;
  if (number <= 3) return number;
  // (1*1 + 1*1 + ....number)
  let result = number;
  for (let x = 1; x <= number; x++) {
    let temp = x * x;
    if (temp > number) {
      break;
    } else result = Math.min(result, 1 + sumOfPerfectSquares(number - temp));
  }
  return result;
}

export { sumOfPerfectSquares };
