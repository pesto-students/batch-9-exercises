const charCodes = stringArray => stringArray.map(char => char.charCodeAt());


const CHAR_CODE_A = 'A'.charCodeAt();
const CHAR_CODE_Z = 'Z'.charCodeAt();
const isAlphabet = charCode => charCode >= CHAR_CODE_A && charCode <= CHAR_CODE_Z;
const decipherCodesArray = stringArray => charCodes(stringArray)
  .map((charCode) => {
    if (isAlphabet(charCode)) {
      const decipherAlphabetPostion = ((charCode - CHAR_CODE_A + 13) % 26);
      return CHAR_CODE_A + decipherAlphabetPostion;
    }
    return charCode;
  });

const charArray = codesArray => String.fromCharCode(...codesArray);

function rot13(string) {
  const decipherCodes = decipherCodesArray(string.split(''));

  return charArray(decipherCodes);
}


export {
  rot13,
};
