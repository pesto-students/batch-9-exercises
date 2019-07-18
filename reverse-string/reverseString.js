function reverseString(string) {
  let revString = '';
  // eslint-disable-next-line no-return-assign
  string.split('').forEach(char => revString = char + revString);
  return revString;
}

export {
  reverseString,
};
