function squareNumbersArray(...args) {
  const isNumberArray = [...args].every(Number);

  if (!isNumberArray) {
    throw new Error("My custom error");
  }

  return [...args].map(element => element ** 2);
}

export { squareNumbersArray };
