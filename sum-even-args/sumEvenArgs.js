
function sumEvenArgs(...args) {
  return [...args]
    .filter(number => (number % 2) === 0)
    .reduce((acc, el) => acc += el, 0);
}

export {
  sumEvenArgs,
};
