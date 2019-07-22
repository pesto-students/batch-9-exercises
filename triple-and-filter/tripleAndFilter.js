const triple = array => array.map(number => number * 3);
const isDivisibleby5 = array => array % 5 === 0;

const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const numberFilter = filterFn => numbers => numbers.filter(filterFn);

function tripleAndFilter(array) {
  const piped = pipe(triple, numberFilter(isDivisibleby5));
  return piped(array);
}

export {
  tripleAndFilter,
};
