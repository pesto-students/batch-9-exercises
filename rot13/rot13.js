const isLetter = value => value >= 65 && value <= 90;

const circularTransformNeeded = value => value - 13 < 65;

const circularTransform = value => 90 - (65 - (value - 13)) + 1;

const decryptCharacter = (character) => {
  let shiftedCodePoint = character.codePointAt();
  const characterCodePoint = character.codePointAt();
  if (isLetter(characterCodePoint)) {
    if (circularTransformNeeded(characterCodePoint)) {
      shiftedCodePoint = circularTransform(characterCodePoint);
    } else {
      shiftedCodePoint = character.codePointAt() - 13;
    }
    return String.fromCodePoint(shiftedCodePoint);
  }
  return character;
};

const decryptWord = (word) => {
  const transforms = [];
  for (const character of word) {
    transforms.push(decryptCharacter(character));
  }
  const transformedWord = transforms.join('');
  return transformedWord;
};

function rot13(string) {
  if (typeof string !== 'string') {
    throw new TypeError(`Expected: Input of type string, Received: ${typeof string}`);
  }
  const encryptedWords = string.split(' ');
  const transformedWords = [];
  for (const word of encryptedWords) {
    transformedWords.push(decryptWord(word));
  }
  return transformedWords.join(' ');
}

export {
  rot13,
};
