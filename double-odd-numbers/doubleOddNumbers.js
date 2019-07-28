const doubleNumbers = number => number * 2;

const filterOddNumbers = number => number % 2;

function splat(firstFunction) {
  return secondFunction => (list) => {
    let result = Array.prototype.filter.call(list, firstFunction);
    result = Array.prototype.map.call(result, secondFunction);
    return result;
  };
}

const doubleMap = splat(filterOddNumbers)(doubleNumbers);

function doubleOddNumbers(list) {
  return doubleMap(list);
}

export {
  doubleOddNumbers,
};
