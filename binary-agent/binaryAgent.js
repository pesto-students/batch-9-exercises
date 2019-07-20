
function binaryAgent(binarySentence) {
  if (typeof binarySentence !== 'string') {
    throw Error(`Expected argument to be of type string. Received: ${typeof binarySentence}`);
  }
  return binarySentence.split(' ').reduce((sentence, word) => sentence + String.fromCharCode(parseInt(word, 2)), '');
}

export {
  binaryAgent,
};
