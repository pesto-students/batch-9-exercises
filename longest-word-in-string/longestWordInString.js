function longestWordInString(string) {
  const words = string.split(' ');
  words.sort((a, b) => (a.length - b.length));
  const sizeOfLongestWord = words.slice(-1).toString().length;
  return sizeOfLongestWord;
}

export {
  longestWordInString,
};
