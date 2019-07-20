
function decodeCharcter(char) {
  const asciiValue = char.charCodeAt(0);
  // eslint-disable-next-line max-len
  const isEnglishAlphabet = (asciiValue >= 97 && asciiValue <= 122) || (asciiValue >= 65 && asciiValue <= 90);
  if (!isEnglishAlphabet) { return char; }
  const decodedAsciiValue = (((asciiValue - 65) + 13) % 26) + 65;
  return String.fromCharCode(decodedAsciiValue);
}
function rot13(encodedString) {
  const encodedCharArr = encodedString.split('');
  const decodedString = encodedCharArr.map(decodeCharcter).join('');
  return decodedString;
}
export {
  rot13,
};
