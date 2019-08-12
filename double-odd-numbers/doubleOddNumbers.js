function doubleOddNumbers(numbers) {
  const isOdd = number => number % 2 !== 0;
  const double = number => number * 2;
  const oddNumbers = numbers.filter(isOdd);
  const doubleAllOddNumbers = oddNumbers.map(double);
  return doubleAllOddNumbers;
}

export {
  doubleOddNumbers,
};
