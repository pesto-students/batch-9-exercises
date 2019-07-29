function longestWordInString(sentence) {
  let longestLenghtOfWord = 0;
  return sentence.split(" ").reduce((longestLength, word) => {
    word.length > longestLength
      ? (longestLenghtOfWord = word.length)
      : (longestLenghtOfWord = longestLength);
    return longestLenghtOfWord;
  }, 0);
  // return args;
}

export { longestWordInString };
