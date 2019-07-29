function isPalindrome(input) {
  const removeWhiteSpaceAndSpecialCharRegex = /[\W_]/g;

  let string = input;
  if (typeof string === "number") {
    string = String(input);
  }

  let modifiedString = string
    .toLowerCase()
    .replace(removeWhiteSpaceAndSpecialCharRegex, "");
  return (
    modifiedString
      .split("")
      .reverse()
      .join("") === modifiedString
  );
}

export { isPalindrome };
