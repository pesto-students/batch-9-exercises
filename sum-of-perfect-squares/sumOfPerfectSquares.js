function sumOfPerfectSquares(number) {
  if (number <= 3) {
    return number;
  }

  let result = number;

  for (let i = 1; i < number + 1; i += 1) {
    // get squared number
    const temp = i * i;
    if (temp > number) {
      break;
    } else {
      // get whatever is lower:
      // 1 - the current minimum, or
      // 2 - the minimum after considering the next perfect square
      result = Math.min(result, 1 + sumOfPerfectSquares(number - temp));
    }
  }
  return result;
}

export {
  sumOfPerfectSquares,
};
