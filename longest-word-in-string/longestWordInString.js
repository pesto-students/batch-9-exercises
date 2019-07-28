import { findLargest } from '../large-of-four/largeOfFour';

function longestWordInString(randomString) {
  const wordsLengthList = randomString.split(' ').map(word => word.length);

  const longestWordSize = findLargest(wordsLengthList);

  return longestWordSize;
}

export { longestWordInString };
