function isPrime(num) {
  const squareroot = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= squareroot; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(number) {
  const primeNumbers = [2];
  for (let i = 3; i <= number; i += 2) {
    if (isPrime(i)) {
      primeNumbers.push(i);
    }
  }
  console.log(primeNumbers);
  const primeNumbersSum = primeNumbers.reduce(
    (sum, elememt) => sum + elememt,
    0
  );

  return primeNumbersSum;
}

export { sumPrimes };
// console.log(sumPrimes(10));
