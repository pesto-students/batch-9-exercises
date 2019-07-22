function doubleOddNumbers(array) {
  const oddNumbers = array.filter(number => number % 2 !== 0);
  const doubledOddNumbers = oddNumbers.map(oddNumber => oddNumber * 2);
  return doubledOddNumbers;
}

export { doubleOddNumbers };
