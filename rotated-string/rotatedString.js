
function rotatedString(string, secondString) {
  let newString = string;
  for (let i = 0; i < string.length - 1; i += 1) {
    newString = newString.substring(1, newString.length) + newString[0];
    if (newString === secondString) {
      return true;
    }
  }
  return false;
}

export {
  rotatedString,
};
