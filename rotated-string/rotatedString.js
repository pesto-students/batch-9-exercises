
function rotatedString(string1, string2) {
  const areEqualLengthStr = string1.length === string2.length;
  if (!areEqualLengthStr) { throw Error('String lengths mismatch.'); }
  if (string1 === string2) return false;
  const repeatedString1 = string1 + string1;
  return repeatedString1.includes(string2);
}
export {
  rotatedString,
};
