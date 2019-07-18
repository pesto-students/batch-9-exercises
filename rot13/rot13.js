
function rot13(encodedString) {
  let decodedString = '';
  for (let i = 0; i < encodedString.length; i += 1) {
    if (encodedString[i].match(/[A-Z]/i)) {
      const charCode = encodedString[i].charCodeAt(0);
      if (charCode <= 90 && charCode >= 65) {
        decodedString += 'A';
      }
    } else {
      decodedString += encodedString[i];
    }
  }
  return decodedString;
  // Incomplete
}

export {
  rot13,
};
