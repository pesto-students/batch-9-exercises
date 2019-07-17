
function reverseString(string) {
  return string.split('').reduce((acc, val) => {
    const reversedString = val + acc;
    return reversedString;
  }, '');
}

export {
  reverseString,
};
