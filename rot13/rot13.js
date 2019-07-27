const charCodeOfA = 65;
const charCodeOfZ = 90;

const isUpperCase = charCode => (charCode >= charCodeOfA && charCode <= charCodeOfZ);

function rot13(encryptedMessage) {
  const shift = 13;
  return encryptedMessage.split('').map((char) => {
    const charCode = char.codePointAt(0);
    if (isUpperCase(charCode)) {
      if (((charCode + shift) % (charCodeOfZ + 1)) < charCodeOfA) {
        return String.fromCodePoint(charCodeOfA + ((charCode + shift) % (charCodeOfZ + 1)));
      }
      return String.fromCodePoint(charCode + shift);
    }
    return String.fromCodePoint(charCode);
  }).join('');
}

export {
  rot13,
};
