function rotatedString(string1, string2) {
  if (string1 === string2) {
    return false;
  }

  if (string1.length !== string2.length) {
    return false;
  }

  const tempString = string1 + string1;

  return tempString.includes(string2);
}

export { rotatedString };
