const sortString = str => str.split('').sort().join('');

function rotatedString(inputString, outputString) {
  if (inputString.length !== outputString.length || inputString === outputString) {
    return false;
  }
  return sortString(inputString) === sortString(outputString);
}

export {
  rotatedString,
};
