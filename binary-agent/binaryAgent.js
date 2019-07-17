const asciiValue = binaryCode => Number.parseInt(binaryCode, 2);

const binaryCodeToWord = binaryCode => String.fromCharCode(asciiValue(binaryCode));

function binaryAgent(binaryCodeString) {
  const binaryCodeArray = binaryCodeString.split(' ');
  let sentence = '';
  binaryCodeArray.forEach((binaryCode) => {
    sentence += binaryCodeToWord(binaryCode);
  });
  return sentence;
}

export {
  binaryAgent,
};
