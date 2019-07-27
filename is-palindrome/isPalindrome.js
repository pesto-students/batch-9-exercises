
function isPalindrome(sequence) {
  //comment
  if (typeof sequence === 'string') {
    const regex = /\W|_/g;
    const filteredSequence = sequence.replace(regex, '');
    return filteredSequence.toLowerCase().split('').reverse().join('') === filteredSequence.toLowerCase();
  }
  return Number(sequence.toString().split('').reverse().join('')) === sequence;
}

export {
  isPalindrome,
};
