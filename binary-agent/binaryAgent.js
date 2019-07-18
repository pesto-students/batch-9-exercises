function binaryAgent(stringInBinary) {
  if (typeof stringInBinary !== "string") {
    throw Error("Argument: expected string, received " + typeof stringInBinary);
  }

  if (stringInBinary === "") {
    throw Error("Argument can't be an empty string");
  }
  return stringInBinary
    .split(" ")
    .reduce(
      (string, word) => string + String.fromCharCode(parseInt(word, 2)),
      ""
    );
}

export { binaryAgent };
