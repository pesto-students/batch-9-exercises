
function longestWordInString(string) {
  const words = string.split(' ');
  let longestWordLength = 0;
  words.forEach((word) => {
    if (word.length > longestWordLength) {
      longestWordLength = word.length;
    }
  });
  return longestWordLength;
}

export {
  longestWordInString,
};
