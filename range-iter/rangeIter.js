const checkIfNumber = num => typeof num === 'number';
function* rangeIter(lowerBound = Number.MIN_SAFE_INTEGER, upperBound = Number.MAX_SAFE_INTEGER) {
  if (!checkIfNumber(lowerBound)) {
    throw new Error(`${lowerBound} is not a number`);
  }
  if (!checkIfNumber(lowerBound)) {
    throw new Error(`${lowerBound} is not a number`);
  }
  let copyOfLowerBound = lowerBound;
  while (true) {
    const isNxtValueSafe = Number.isSafeInteger(copyOfLowerBound) && copyOfLowerBound <= upperBound;
    if (isNxtValueSafe) {
      yield copyOfLowerBound;
      copyOfLowerBound += 1;
    } else {
      return;
    }
  }
}
export {
  rangeIter,
};
