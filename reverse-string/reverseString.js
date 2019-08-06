
function reverseString(string) {
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    newString += string[string.length - i - 1];
  }
  return newString;
}

export {
  reverseString,
};
