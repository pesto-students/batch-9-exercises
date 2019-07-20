/* eslint-disable no-undef */
const isFibonacci = (number) => {
  const fib = [0, 1];
  for (i = 2; i <= number; i += 1) {
    fib[i] = fib[i - 2] + fib[i - 1];
  }
  return fib;
};

function sumFibs(number) {
  let fibSum = 0;
  isFibonacci(number).forEach((el) => {
    if (el % 2 !== 0) {
      fibSum += el;
    }
  });
  return fibSum;
}

export {
  sumFibs,
};
