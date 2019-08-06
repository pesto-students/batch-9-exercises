
function isPalindrome(inputString) {
  const palindromeRegex = new RegExp(/[a-zA-Z0-9]+/, 'g');
  const newString = inputString.toString().match(palindromeRegex).join('').toLowerCase();
  return newString === newString.split('').reverse().join('');
}

export {
  isPalindrome,
};
