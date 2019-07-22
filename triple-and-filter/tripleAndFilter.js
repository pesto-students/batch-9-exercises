const applyGivenConditionFn = condition => array => () => array.map(value => condition(value));

function tripleAndFilter(array) {
  const isDivisibleBy5 = applyGivenConditionFn(x => x % 5 === 0);
  const tripleTheFunction = applyGivenConditionFn(x => x * 3);
  const tripleDivisibleBy5 = isDivisibleBy5(tripleTheFunction(array)());
  return tripleDivisibleBy5();
}

export {
  tripleAndFilter,
};
