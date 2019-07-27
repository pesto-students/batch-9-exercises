
const tripleNumber = number => number * 3;

const divisibleByFive = number => number % 5 === 0;

function tripleAndFilter(inputArray) {
  const tripledArray = inputArray.map(tripleNumber);
  return tripledArray.filter(divisibleByFive);
}

export {
  tripleAndFilter,
};
