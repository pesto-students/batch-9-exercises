
function rotatedString(string, rotateString) {
  if (string === rotateString) {
    return false;
  }
  return (rotateString + rotateString).includes(string);
}

export {
  rotatedString,
};
