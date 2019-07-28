
const isOdd = number => Boolean(number % 2);
const doubleNumber = number => number * 2;

const filterNumbers = numbers => fn => numbers.filter(fn);
const mapNumbers = numbers => fn => numbers.map(fn);

console.log(filterNumbers([1, 2, 3, 4, 5])(isOdd));

function doubleOddNumbers(array) {
  const oddNumbers = filterNumbers(array)(isOdd);
  const doubleNumbers = mapNumbers(oddNumbers)(doubleNumber);
  return doubleNumbers;
}
export {
  doubleOddNumbers,
};
