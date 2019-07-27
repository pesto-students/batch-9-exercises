
function abbreviateString(argAnyValue) {
  if (typeof argAnyValue !== 'string') {
    throw TypeError(`String Not Received: ${typeof argAnyValue}`);
  }
  const wordArray = argAnyValue.split(' ');
  const firstWord = wordArray[0];
  const lastWord = wordArray[wordArray.length - 1];
  const abbrlastword = lastWord[0].toUpperCase() + '.';

  return `${firstWord} ${abbrlastword}`;
}

export {
  abbreviateString,
};
