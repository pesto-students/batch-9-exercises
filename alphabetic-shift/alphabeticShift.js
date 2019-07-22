/* eslint-disable max-len */
function rot1(char) {
  const charCode = char.charCodeAt(0);
  const rotateBy = 1;
  const maxLoweCaseCharacterCode = 122;
  const minLoweCaseCharacterCode = 97;
  const maxUpperCaseCharacterCode = 90;
  const minUpperCaseCharacterCode = 65;
  let shiftedChar = char;
  if ((charCode >= minUpperCaseCharacterCode) && (charCode <= maxUpperCaseCharacterCode)) {
    const shiftedCharacterCode = ((charCode - minUpperCaseCharacterCode + rotateBy) % 26) + minUpperCaseCharacterCode;
    shiftedChar = String.fromCharCode(shiftedCharacterCode);
  // eslint-disable-next-line brace-style
  }

  // Lowercase letters
  else if ((charCode >= minLoweCaseCharacterCode) && (charCode <= maxLoweCaseCharacterCode)) {
    const shiftedCharcter = ((charCode - minLoweCaseCharacterCode + rotateBy) % 26) + minLoweCaseCharacterCode;
    shiftedChar = String.fromCharCode(shiftedCharcter);
  }
  return shiftedChar;
}
function alphabeticShift(string) {
  const charArray = string.split('');
  const shiftedString = charArray.map(rot1).join('');
  return shiftedString;
}

export {
  alphabeticShift,
};
