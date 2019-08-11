function alienAlphabet(alienWords) {
  const positionedCharacters = [];
  for (let i = 0; i < alienWords.length; i += 1) {
    for (let j = 0; j < alienWords.length; j += 1) {
      if (alienWords[j][i]) {
        positionedCharacters.push(alienWords[j][i]);
      }
    }
  }
  const alphabet = [];
  positionedCharacters.forEach((character) => {
    if (!alphabet.includes(character)) {
      alphabet.push(character);
    }
  });
  return alphabet.slice(0, alienWords.length);
}

export {
  alienAlphabet,
};
