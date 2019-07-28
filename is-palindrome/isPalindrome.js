function isPalindrome(randomString) {
  if (typeof randomString !== 'number' && typeof randomString !== 'string') {
    throw new Error(
      `The value passed (${
        randomString
      }) is not of valid type, its type is:${
        typeof randomString
      } but it should be of type either string or number.`,
    );
  }

  const regExToRemoveUnwanted = /[\W_]/g;
  const lowerCasedCleanString = String(randomString)
    .toLowerCase()
    .replace(regExToRemoveUnwanted, '');
  const reversedLowerCasedCleanString = lowerCasedCleanString
    .split('')
    .reverse()
    .join('');
  return lowerCasedCleanString === reversedLowerCasedCleanString;
}

export { isPalindrome };
