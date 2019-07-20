const compose = (...functions) => args => functions.reduce((params, fn) => fn(params), args);
const getSum = (array) => array.reduce((acc, next) => acc + next);
const isPrime = number => {
  const sqrt = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= sqrt; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};
const getPrimes = (number) => {
  let primes = [];
  for (let i = 2; i <= number; i += 1) {
    if (isPrime(i)) {
      primes = [...primes, i];
    }
  }
  return primes;
};

const sumPrimes = number => compose(
  getPrimes,
  getSum,
)(number);

export {
  sumPrimes,
};
