const isPrime = (number) => {
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

function sumPrimes(limit) {
  let sum = 0;
  if (limit > 1) {
    sum = 2;
  }
  for (let i = 3; i <= limit; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

export {
  sumPrimes,
};
