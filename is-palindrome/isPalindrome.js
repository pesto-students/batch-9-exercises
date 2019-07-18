function trimSpecialChars(text) {
  // this regular expression trims special characters and allows only alphanumeric characters
  return `${text}`.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function isPalindrome(value) {
  const string = trimSpecialChars(value);
  return string.split("").reverse().join("") === string;
}

export {
  isPalindrome,
};
