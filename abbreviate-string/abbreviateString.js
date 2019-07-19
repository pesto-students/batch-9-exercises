
function abbreviateString(string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected argument to be of type String. Received: ${typeof string}`);
  }
  const words = string.split(' ');
  const firstWord = words[0];
  const lastWordLetter = words[words.length - 1][0];
  return `${firstWord} ${lastWordLetter.toUpperCase()}.`;
}

export {
  abbreviateString,
};
