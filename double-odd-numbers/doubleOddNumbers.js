const doubleNumbers = number => number * 2;

function splat(fn) {
  return list => Array.prototype.map.call(list, fn);
}

// eslint-disable-next-line no-bitwise
const filterOddNumbers = list => list.filter(num => num & 1);

function doubleOddNumbers(list) {
  const oddNumbers = filterOddNumbers(list);
  return splat(doubleNumbers)(oddNumbers);
}

export {
  doubleOddNumbers,
};
