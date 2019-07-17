const convertFromBinaryToString = (charInBinary) => {
  const charCode = parseInt(charInBinary, 2).toString(10);
  const letterFromCharCode = String.fromCharCode(charCode);
  return letterFromCharCode;
};

function binaryAgent(stringInBinary) {
  const arrayContainingCharInBinaryFormat = stringInBinary.split(' ');
  const arrayOfChars = arrayContainingCharInBinaryFormat.map(convertFromBinaryToString);
  const sentence = arrayOfChars.join('');
  return sentence;
}

export {
  binaryAgent,
};
