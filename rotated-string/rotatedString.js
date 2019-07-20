function rotatedString(string1, string2) {
  if (string1.length !== string2.length) {
    throw Error('Strings length do not match');
  }

  if (string1 === string2) {
    return false;
  }
  const sortedString1 = string1.split('').sort().join('');
  const sortedString2 = string2.split('').sort().join('');
  return sortedString1 === sortedString2;
}

export {
  rotatedString,
};
