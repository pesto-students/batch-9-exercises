function reverseString(string) {
  let outputString = '';
  let iterator = string.length - 1;

  while (iterator >= 0) {
    outputString += string[iterator];
    iterator -= 1;
  }
  return outputString;
}

export { reverseString };
