function alternatingCharacters(array) {
  return array.map(string => {
    let count = 0;
    const characters = string.split("");
    characters.forEach((character, index) => {
      if (character === characters[index + 1]) {
        count = count + 1;
      }
    });
    return count;
  });
}

export { alternatingCharacters };
