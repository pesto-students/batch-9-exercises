
function longestWordInString(inputString) {
  const lengthOfLongestWord = Math.max(...inputString.split(' ').map(e => e.length));
  return lengthOfLongestWord;
}

export {
  longestWordInString,
};
