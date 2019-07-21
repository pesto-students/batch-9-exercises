
function isPalindrome(input) {
  const string = input.toString();
  const lowerCaseString = string.toLowerCase();
  const alphaNumericRegex = /[^0-9a-z]/g;
  const alphaNumericString = lowerCaseString.replace(alphaNumericRegex, '');
  const reverseAlphaNumericString = alphaNumericString.split('').reverse().join('');
  return reverseAlphaNumericString === alphaNumericString;
}

export {
  isPalindrome,
};
