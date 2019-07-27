

function doubleOddNumbers(argArray) {
  const isOdd = number => number % 2 !== 0;
  const doubleArray = number => number * 2;
  const oddArray = argArray.filter(isOdd);
  
  return oddArray.map(doubleArray);
}

export {
  doubleOddNumbers,
};
