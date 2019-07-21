function getIndexToIns(array, value) {
  const sortedArray = array.sort((a, b) => a - b);
  for (let i = 0; i < sortedArray.length; i += 1) {
    if (value <= sortedArray[i]) {
      return i;
    }
  }
  return sortedArray.length;
}

export {
  getIndexToIns,
};
