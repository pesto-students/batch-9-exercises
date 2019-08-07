function getAlternates(array) {
  return array.filter((element, index) => array[index + 1] === element);
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
