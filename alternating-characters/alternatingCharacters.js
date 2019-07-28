
function getAlternates(array) {
  return array.filter((element, index) => {
    if (array[index + 1] === element) {
      return true;
    }
    return false;
  });
}
function alternatingCharacters(array) {
  const alternates = array.map((word) => {
    const alternatesInWord = getAlternates(word.split(''));
    return alternatesInWord.length;
  });
  return alternates;
}

export {
  alternatingCharacters,
};
