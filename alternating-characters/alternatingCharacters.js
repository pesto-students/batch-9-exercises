const getAlternateCharCount = chars => chars.reduce((count, char, index) => {
  const nextIndex = index + 1;
  if (char === chars[nextIndex]) {
    return count + 1;
  }
  return count;
}, 0);

function alternatingCharacters(strings) {
  return strings.map((string) => {
    const chars = string.split('');
    return getAlternateCharCount(chars);
  });
}

export {
  alternatingCharacters,
};
