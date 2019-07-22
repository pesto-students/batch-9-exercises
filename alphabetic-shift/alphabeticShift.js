const asciiCode = letter => letter.charCodeAt(0);

const nextLetter = (letter) => {
  let nextLetterAscii = 0;
  if (asciiCode(letter) === 90) {
    nextLetterAscii = 65;
  } else if (asciiCode(letter) === 122) {
    nextLetterAscii = 97;
  } else {
    nextLetterAscii = 1 + letter.charCodeAt(0);
  }
  return String.fromCharCode(nextLetterAscii);
};

function alphabeticShift(string) {
  const letters = string.split('');
  const alphabeticShiftedLetters = letters.map(letter => nextLetter(letter));
  return alphabeticShiftedLetters.join('');
}

export {
  alphabeticShift,
};
