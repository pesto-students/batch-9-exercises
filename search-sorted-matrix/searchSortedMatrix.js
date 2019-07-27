const binarySearch = (array, value) => {
  let guessIndex;
  let minIndex = 0;
  let maxIndex = array.length - 1;

  while (minIndex <= maxIndex) {
    guessIndex = Math.floor((minIndex + maxIndex) / 2);
    if (array[guessIndex] === value) {
      return guessIndex;
    }
    if (array[guessIndex] < value) {
      minIndex = guessIndex + 1;
    } else {
      maxIndex = guessIndex - 1;
    }
  }

  return -1;
};
function searchSortedMatrix({ matrix, search }) {
  const sortedFlatArray = Array.prototype.concat(...matrix);
  const searchItemIndex = binarySearch(sortedFlatArray, search);
  const searchItemExists = searchItemIndex > -1;
  return searchItemExists;
}

export {
  searchSortedMatrix,
};
