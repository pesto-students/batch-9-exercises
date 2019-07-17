
function sumAll(range) {
  let [lowerBound, upperBound] = range;
  let sumOfRange = 0;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  for (let i = lowerBound; i <= upperBound; i += 1) {
    sumOfRange += i;
  }
  return sumOfRange;
}

export {
  sumAll,
};
