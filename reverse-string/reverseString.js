function reverseString(string) {
  const reversedString = [];
  string.split("").forEach((character, index) => {
    reversedString[string.length - 1 - index] = character;
  });
  return reversedString.join("");
}

export { reverseString };
