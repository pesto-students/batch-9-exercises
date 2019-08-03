const cleanedAndLowerCasedString = (string) => {
  const charactersToBeAvoided = /[\W_]/g;
  const cleanedString = string.replace(charactersToBeAvoided, '');
  return cleanedString.toLowerCase();
};

function isPalindrome(string) {
  let input = string;
  if (typeof string === 'number') {
    input = String(string);
  }
  input = cleanedAndLowerCasedString(input);
  const reverse = input.split('').reverse().join('');
  return input === reverse;
}

export {
  isPalindrome,
};
