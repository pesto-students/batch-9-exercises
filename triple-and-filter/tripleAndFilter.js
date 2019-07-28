const triple = number => number * 3;

const isDivisibleBy = divisor => dividend => dividend % divisor === 0;

const isDivisibleByFive = isDivisibleBy(5);

function tripleAndFilter(list) {
  return list.map(triple).filter(isDivisibleByFive);
}

export {
  tripleAndFilter,
};
