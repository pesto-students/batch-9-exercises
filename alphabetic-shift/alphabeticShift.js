function alphabeticShift(string) {
  let result = '';
  let charcode = 0;

  for (let i = 0; i < string.length; i += 1) {
    charcode = (string[i].charCodeAt()) + 1;
    result += String.fromCharCode(charcode);
  }
  return result;
}

export {
  alphabeticShift,
};
