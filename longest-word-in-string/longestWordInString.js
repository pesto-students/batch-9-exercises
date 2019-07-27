
function longestWordInString(arg_string) {
  return Math.max(...arg_string.split(' ').map(el => el.length));
}

export {
  longestWordInString,
};
