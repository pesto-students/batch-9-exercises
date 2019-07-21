/* eslint-disable prefer-const */
/* eslint-disable no-const-assign */
/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */

const isPrime = (number) => {
  let result = true;
  if (number < 2) {
    result = false;
  }
  const numSquareRoot = Math.floor(Math.sqrt(number));
  for (let i = 2; i <= numSquareRoot; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return result;
};


function sumPrimes(number) {
  let primeSum = 0;
  for (let i = 0; i <= number; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }
  return primeSum;
}

export {
  sumPrimes,
};
