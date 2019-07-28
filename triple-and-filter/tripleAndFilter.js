
function tripleAndFilter(arr) {
  const numbersTriced = arr.map(num => num * 3);
  const numbersDivisibleByFive = numbersTriced.filter(num => (num % 5 === 0));
  return numbersDivisibleByFive;
}

export {
  tripleAndFilter,
};
