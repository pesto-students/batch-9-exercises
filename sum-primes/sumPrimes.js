const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const sum = numbers => numbers.reduce((a, b) => a + b, 0);

function sumPrimes(limit) {
  return sum([...Array(limit + 1).keys()].filter(isPrime));
}

export {
  sumPrimes,
};
