
function longestWordInString(sentence) {
  const words = sentence.split(' ');
  let maxLength = 0;
  words.forEach((word) => {
    if (word.length > maxLength) {
      maxLength = word.length;
    }
  });
  return maxLength;
}

export {
  longestWordInString,
};
