function tripleAndFilter(array) {
  const isDivisibleBy5 = x => x % 5 === 0;
  const tripleTheFunction = x => x * 3;
  return array.map(tripleTheFunction).filter(isDivisibleBy5);
}

export {
  tripleAndFilter,
};
