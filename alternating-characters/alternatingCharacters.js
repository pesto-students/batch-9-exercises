const checkForContinuous = (charactersArray) => {
  const charactersToDelete = charactersArray
    .filter((character, index) => character === charactersArray[index - 1]);
  return charactersToDelete.length;
};

function alternatingCharacters(stringsArray) {
  const deletionsAray = stringsArray.map((string) => {
    const numberOfDeletions = checkForContinuous(string.split(''));
    return numberOfDeletions;
  });
  return deletionsAray;
}

export {
  alternatingCharacters,
};
