function argsString(stringWithBrackets, replaceBracketsWith) {
  return replaceBracketsWith.reduce((finalString, replacement) => {
    return stringWithBrackets.replace('{}', replacement);
  }, '');
}
export { argsString };
