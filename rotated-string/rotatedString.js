function rotatedString(inputString, rotateString) {
  if (inputString === rotateString) {
    return false;
  }
  return (rotateString + rotateString).includes(inputString);
}

export {
  rotatedString,
};
