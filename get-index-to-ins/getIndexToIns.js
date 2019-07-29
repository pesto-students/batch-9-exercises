function getIndexToIns(array, number) {
  const sortedArray = array.sort((a, b) => a - b);
  let positionedIndex = -1;
  if (number <= sortedArray[0]) {
    positionedIndex = 0;
  } else if (number >= sortedArray[sortedArray.length - 1]) {
    positionedIndex = sortedArray.length;
  } else {
    sortedArray.forEach((element, index) => {
      if (number === element) {
        positionedIndex = index;
      } else if (number > element && number < sortedArray[index + 1]) {
        positionedIndex = index + 1;
      }
    });
  }
  return positionedIndex;
}

export { getIndexToIns };
