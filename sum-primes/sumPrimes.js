function hasMultiplesBetween(start, end) {
  return start ** 2 <= end;
}
function sumPrimes(maxNumber) {
  const sizeForNumberArray = maxNumber;
  const isIndexPrimeArray = Array(sizeForNumberArray + 1).fill(true);
  const firstPrimeNumber = 2;
  let currentNumber = firstPrimeNumber;
  let initialSumOfPrimes = 0;
  while (hasMultiplesBetween(currentNumber, maxNumber)) {
    if (isIndexPrimeArray[currentNumber]) {
      const firstMultipleOfCurrentNumber = currentNumber * 2;

      let multipleOfCurrentNumber = firstMultipleOfCurrentNumber;

      while (multipleOfCurrentNumber <= maxNumber) {
        isIndexPrimeArray[multipleOfCurrentNumber] = false;
        multipleOfCurrentNumber += currentNumber;
      }
    }
    currentNumber += 1;
  }

  for (let i = 2; i <= maxNumber; i += 1) {
    if (isIndexPrimeArray[i] === true) {
      initialSumOfPrimes += i;
    }
  }
  return initialSumOfPrimes;
}

export {
  sumPrimes,
};
