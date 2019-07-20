
function reverseString(string) {
  const lastIndexOfString = string.length - 1;
  let newString = '';
  for (let i = lastIndexOfString; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
}

export {
  reverseString,
};
