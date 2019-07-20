
function isPalindrome(value) {
  const string = value.toString();
  const lowerCaseString = string.toLowerCase();
  const alphanumericRegex = /[^0-9a-z]/g;
  const alphaNumericString = lowerCaseString.replace(alphanumericRegex, '');
  const reverseAlphaNumericString = alphaNumericString.split('').reverse().join('');
  return alphaNumericString === reverseAlphaNumericString;
}

export {
  isPalindrome,
};
