function abbreviateString(string) {
  if (typeof string !== "string") {
    throw new Error("Expected string in argument, received: " + typeof string);
  }
  const words = string.split(" ");
  return `${words[0]} ${words[words.length - 1].charAt(0).toUpperCase()}.`;
}

export { abbreviateString };
