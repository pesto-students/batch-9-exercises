
function binaryAgent(binaryString) {
  const binaryStringArray = binaryString.split(' ');
  const convertedStringArray = [];

  for (let i = 0; i < binaryStringArray.length; i += 1) {
    convertedStringArray.push(String.fromCharCode(parseInt(binaryStringArray[i], 2)));
  }
  const result = convertedStringArray.join('');
  return result;
}

export {
  binaryAgent,
};
