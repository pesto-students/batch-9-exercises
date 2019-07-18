
function isPalindrome(arg) {
  const input = arg.split('');
  const reverse = input.reverse().join('');
  if (arg === reverse) {
    return true;
  }
  return false;
}

export {
  isPalindrome,
};
