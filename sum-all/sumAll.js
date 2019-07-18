
function sumAll(inputArray) {
  let sum = 0;
  let [lowerBound, upperBound] = inputArray;
  if (lowerBound > upperBound) {
    [lowerBound, upperBound] = [upperBound, lowerBound];
  }
  for (let i = lowerBound; i <= upperBound; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
