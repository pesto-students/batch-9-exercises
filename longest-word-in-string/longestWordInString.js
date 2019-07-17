/* eslint-disable no-plusplus */
function longestWordInString(inputString) {
  const splitString = inputString.split(' ');
  let longestWordLength = 0;
  for (let i = 0; i < splitString.length; i++) {
    if (splitString[i].length > longestWordLength) {
      longestWordLength = splitString[i].length;
    }
  }
  return longestWordLength;
}

export {
  longestWordInString,
};
