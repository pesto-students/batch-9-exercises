
function getIndexToIns(array, value) {
  if (Math.max(...array) < value) {
    return array.length;
  }
  const sortedArray = [...array].sort((a, b) => a - b);
  let index;
  for (index = 0; index < sortedArray.length; index += 1) {
    if (sortedArray[index] >= value) {
      break;
    }
  }
  return index;
}

export {
  getIndexToIns,
};
