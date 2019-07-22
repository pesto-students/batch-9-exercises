const tripleNumbers = numbers => numbers.map(number => 3 * number);
const isMultiple5 = number => number % 5 === 0;

const compose = (...fns) => arg => fns.reduce((result, fn) => fn(result), arg);

const filterNum = filterFn => numbers => numbers.filter(filterFn);
function tripleAndFilter(args) {
  const composed = compose(tripleNumbers, filterNum(isMultiple5));
  return composed(args);
}

export {
  tripleAndFilter,
};
