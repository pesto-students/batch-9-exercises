function rot13(string) {
  const lowerLimit = 65;
  const upperLimit = 90;
  const charDistance = 13;
  let newString = '';
  for (let i = 0; i < string.length; i += 1) {
    const code = string.charCodeAt(i);
    if (code >= lowerLimit && code <= upperLimit) {
      const charCode = code + charDistance;
      const extra = charCode - upperLimit;
      const newCharCode = extra > 0 ? lowerLimit + extra - 1 : charCode;
      newString += String.fromCharCode(newCharCode);
    } else {
      newString += string[i];
    }
  }
  return newString;
}
export {
  rot13,
};
