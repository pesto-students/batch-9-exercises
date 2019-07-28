const shiftAlphabet = char => String.fromCharCode(char.charCodeAt(0) + 1);

function alphabeticShift(string) {
  return string.split('').map(shiftAlphabet).join('');
}

export {
  alphabeticShift,
};
