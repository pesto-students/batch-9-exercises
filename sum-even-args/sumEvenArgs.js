const isEven = number => number % 2 === 0;
const filterEven = numbers => numbers.filter(isEven);
const sum = numbers => numbers.reduce((result, num) => result + num, 0);

const compose = (...fns) => arg => fns.reduce((result, fn) => fn(result), arg);

function sumEvenArgs(...args) {
  const composed = compose(filterEven, sum);
  return composed(args);
}

export {
  sumEvenArgs,
};
