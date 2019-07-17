
function isPalindrome(inputString) {
  const newString = inputString.match(/[a-zA-Z0-9]+/g).join('').toLowerCase();
  console.log(newString);
  return newString === newString.split('').reverse().join('');
}

export {
  isPalindrome,
};
