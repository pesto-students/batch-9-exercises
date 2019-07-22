
const shift = (alphabet) => {
  const charCode = alphabet.charCodeAt();
  if (charCode === 90) {
    return String.fromCharCode(65);
  }
  if (charCode === 122) {
    return String.fromCharCode(97);
  }
  return String.fromCharCode(alphabet.charCodeAt() + 1);
};

function alphabeticShift(string) {
  const alphabets = string.split('');
  return alphabets.map(shift).join('');
}

export {
  alphabeticShift,
};
