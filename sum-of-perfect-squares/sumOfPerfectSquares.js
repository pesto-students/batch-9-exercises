function sumOfPerfectSquares(number) {
  if (Math.sqrt(number) - Math.floor(Math.sqrt(number)) === 0) {
    return 1;
  }
  if (number <= 3) {
    return number;
  }
  let answer = Infinity;
  for (let i = 1; i < Math.sqrt(number); i += 1) {
    answer = Math.min(answer, sumOfPerfectSquares(number - (i ** 2)) + 1);
  }
  return answer;
}

export {
  sumOfPerfectSquares,
};
