const isPrime = (number) => {
  let result = true;
  if (number <= 1) {
    result = false;
  } else {
    for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
      if (number % i === 0) {
        result = false;
      }
    }
  }
  return result;
};

const getPrimeList = (upperLimit) => {
  const array = [...Array(upperLimit + 1).keys()];
  return array.reduce((result, val) => {
    if (isPrime(val)) {
      return [...result, val];
    }
    return result;
  }, []);
};
const sumList = list => list.reduce((result, number) => result + number, 0);

function sumPrimes(upperLimit) {
  return sumList(getPrimeList(upperLimit));
}

export {
  sumPrimes,
};
