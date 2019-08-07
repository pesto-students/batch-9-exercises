
function abbreviateString(value) {
  if (typeof value !== 'string') {
    throw TypeError(`Expected: String Received: ${typeof value}`);
  }
  const wordArray = value.split(' ');
  const firstWord = wordArray[0];
  const lastWord = wordArray[wordArray.length - 1];
  return `${firstWord} ${lastWord[0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
