const isUpperCase = charCode => charCode >= 97 && charCode <= 123;
const isLowerCase = charCode => charCode >= 65 && charCode <= 91;

const isAlphabet = (char) => {
  const charCodePoint = char.codePointAt(0);
  if (isUpperCase(charCodePoint) || isLowerCase(charCodePoint)) {
    return true;
  }
  return false;
};

function substitutionCipher(cipher) {
  let flag = 0;
  return [...cipher].map((char) => {
    if (isAlphabet(char)) {
      if (flag === 0) {
        flag = 1;
        return String.fromCodePoint(char.codePointAt(0) + 4);
      }
      flag = 0;
      return String.fromCodePoint(char.codePointAt(0) + 6);
    }
    return char;
  }).join('');
}

export {
  substitutionCipher,
};
