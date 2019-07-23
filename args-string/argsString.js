
function argsString(string, array) {
  let index = 0;
  let sentence = ' ';
  const splitString = string.split(' ');
  for (const str of splitString) {
    if (str.includes('{}')) {
      sentence += str.replace('{}', array[index]);
      index += 1;
    } else sentence += str;
  }
  return sentence;
}
export {
  argsString,
};
