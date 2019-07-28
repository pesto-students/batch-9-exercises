const tripleNumber = number => number * 3;
const divisible = divider => number => number % divider === 0;

function tripleAndFilter(array) {
  const divisibleByFive = divisible(5);
  return array.map(tripleNumber).filter(divisibleByFive);
}

export {
  tripleAndFilter,
};
