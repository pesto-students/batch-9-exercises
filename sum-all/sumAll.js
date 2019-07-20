const sortAscending = (a, b) => a - b;

function sumAll(array) {
  if (!Array.isArray(array)) {
    throw Error('Expected Array, received ' + typeof array);
  }
  if (array.length > 2) {
    throw Error('array expects two elements');
  }

  const arr = array.sort(sortAscending);
  let sum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
