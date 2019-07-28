const reducer = (accumulator, character) => character + accumulator;

function reverseString(string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected: Argument typeof string, Received: ${typeof string}`);
  }
  const characters = string.split('');
  return characters.reduce(reducer, '');
}

export {
  reverseString,
};
