
function binaryAgent(str) {
  const newBin = str.split(' ');
  const binCode = [];

  for (let i = 0; i < newBin.length; i += 1) {
    const asciiCharCode = parseInt(newBin[i], 2);
    const asciiValue = String.fromCharCode(asciiCharCode);
    binCode.push(asciiValue);
  }
  const englishString = binCode.join('');
  return englishString;
}

export {
  binaryAgent,
};
