
function reverseString(arg_string) {

  const end_index = arg_string.length - 1;
  let reversed_string = '';
  let i = end_index;

  for (i; i >= 0; i -= 1) {
    reversed_string += arg_string[i];
  }
  return reversed_string;
}

export {
  reverseString,
};
