
function doesEndWith(subStringOrArray, stringOrArray) {
  const startingIndexToCompare = stringOrArray.length - subStringOrArray.length;
  const uptoIndexToCompare = stringOrArray.length;
  const subStringOrArrayToCompare = stringOrArray.slice(startingIndexToCompare, uptoIndexToCompare);
  const subStringOrArrayIterator = subStringOrArray[Symbol.iterator]();
  for (const currentData of subStringOrArrayToCompare) {
    const currentSubstringData = subStringOrArrayIterator.next().value;
    if (currentSubstringData !== currentData) {
      return false;
    }
  }
  return true;
}

export {
  doesEndWith,
};
