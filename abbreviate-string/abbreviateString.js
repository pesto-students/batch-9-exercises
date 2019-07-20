/* eslint-disable no-undef */

function abbreviateString(inputString) {
  if (typeof inputString !== 'string') {
    throw new TypeError(`Expected string input. Received ${typeof inputString}`);
  }
  const splitString = inputString.split(' ');
  const firstWord = splitString[0];
  const lastwordFirstletter = splitString[splitString.length - 1][0];
  return `${firstWord} ${lastwordFirstletter.toUpperCase()}.`;
}

export {
  abbreviateString,
};
