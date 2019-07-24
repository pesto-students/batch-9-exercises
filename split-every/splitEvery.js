
function splitEvery(splitCount, iterableObj) {
  if (splitCount < 1) {
    throw new Error(`Expected split count > 1. Received split count:${splitCount}`);
  }
  const initialArr = [];
  const isIterableString = typeof iterableObj === 'string';
  let tempArray = isIterableString ? '' : [];
  for (const elem of iterableObj) {
    if (tempArray.length < splitCount) {
      if (!isIterableString) {
        tempArray.push(elem);
      }
    } else {
      initialArr.push([...tempArray]);
      tempArray = [elem];
    }
  }
  if (tempArray.length > 0) {
    initialArr.push(tempArray);
  }
  return initialArr;
}
export {
  splitEvery,
};
