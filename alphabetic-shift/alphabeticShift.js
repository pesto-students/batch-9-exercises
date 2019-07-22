const charCodeOfZ = 90;
const charCodeOfz = 122;

function alphabeticShift(string) {
  return string
    .split('')
    .map(character => {
      let charCode = character.charCodeAt(0);
      let incrementedCharCode = 0;
      if (charCode === charCodeOfz) {
        incrementedCharCode = 97;
      } else if (charCode === charCodeOfZ) {
        incrementedCharCode = 65;
      } else {
        incrementedCharCode = charCode + 1;
      }
      return String.fromCharCode(incrementedCharCode);
    })
    .join('');
}

export { alphabeticShift };
