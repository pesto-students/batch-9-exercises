
function sumOfPerfectSquares(number) {
  const sqrt = Math.floor(Math.sqrt(number));
  let steps = [];
  for (let i = sqrt; i > 1; i--) {
    let remainder = number;
    let whileStart = i;
    let step = 0;
    while (remainder !== 0) {
      const square = Math.pow(whileStart, 2);
      if (square > remainder) {
        whileStart -= 1;
        continue;
      }
      remainder -= square;
      step++;
    }
    steps = [...steps, step];
  }
  return Math.min.apply(null, steps);
}

export {
  sumOfPerfectSquares,
};
