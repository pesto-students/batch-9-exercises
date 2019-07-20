function sortDescending(firstWord, nextWord) {
  return nextWord - firstWord;
}

function longestWordInString(string) {
  return string.split(' ').map(word => word.length).sort(sortDescending)[0];
}

export {
  longestWordInString,
};
