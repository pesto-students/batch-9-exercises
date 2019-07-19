const wordAbbreviated = (word) => {
  const result = word.charAt(0).toUpperCase();
  return result;
};

function abbreviateString(string) {
  const wordsArray = string.split(' ');
  const lastWord = wordsArray[wordsArray.length - 1];
  const abbreviatedString = `${wordsArray[0]} ${wordAbbreviated(lastWord)}.`;
  return abbreviatedString;
}

export {
  abbreviateString,
};
