const isString = element => typeof element === 'string';
const shortenString = (str) => {
  if (str.length <= 0) {
    throw new Error(
      `String is less than 1 char, length of str received: ${str.length}`,
    );
  }
  return `${str[0].toUpperCase()}.`;
};

function abbreviateString(sentence) {
  if (!isString(sentence)) {
    throw new TypeError(`Expected string, got ${typeof sentence}`);
  }

  if (sentence.length === 1) {
    const firstLetter = sentence[0];
    const remainingLetters = sentence.slice(1);
    return firstLetter.toUpperCase() + remainingLetters;
  }

  const sentenceArr = sentence.split(' ');
  const firstWord = sentenceArr[0];
  const lastWord = sentenceArr[sentenceArr.length - 1];
  return `${firstWord} ${shortenString(lastWord)}`;
}

export { abbreviateString };
