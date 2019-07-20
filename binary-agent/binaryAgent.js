
function binaryAgent(binarySentence) {
  if (typeof binarySentence !== 'string') {
    throw Error('argument supplied must be of type string, current argument\'s type is ' + typeof binarySentence);
  }

  if (!binarySentence) {
    throw Error('argument supplied must not be an empty string');
  }

  return binarySentence
    .split(' ')
    .reduce(
      (sentence, word) => sentence + String.fromCharCode(parseInt(word, 2)), '',
    );
}

export {
  binaryAgent,
};
