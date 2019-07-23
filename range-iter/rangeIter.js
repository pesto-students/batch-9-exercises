
function* rangeIter(lowerBound = Number.MIN_SAFE_INTEGER, upperBound = Number.MAX_SAFE_INTEGER) {
  let copyOfLowerBound = lowerBound;
  while (true) {
    const hasASafeNextValue = Number.isSafeInteger(copyOfLowerBound) && copyOfLowerBound < upperBound;
    if (hasASafeNextValue) {
      yield copyOfLowerBound;
      copyOfLowerBound += 1;
    }
  }
}

export {
  rangeIter,
};
