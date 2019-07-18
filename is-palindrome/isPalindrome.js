function isLowerCaseChar(char) {
  const charCode = char.charCodeAt(0);
  return charCode >= 97 && charCode <= 123;
}

function isNumber(char) {
  const charCode = char.charCodeAt(0);
  return charCode >= 48 && charCode <= 57;
}

function isPalindrome(sequence) {
  if (typeof sequence === 'string') {
    const filteredArraySequence = sequence.toLowerCase().split('')
      .filter(char => isLowerCaseChar(char) || isNumber(char));
    return filteredArraySequence.join('') === filteredArraySequence.reverse().join('');
  }
  return Number(sequence.toString().split('').reverse().join('')) === sequence;
}


export {
  isPalindrome,
};
