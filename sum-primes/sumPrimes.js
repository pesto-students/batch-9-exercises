const isPrime = (number) => {
  let result = false;
  let flag = 0;
  if (number > 0 && number <= 3) {
    result = true;
  } else if (number > 3) {
    if (number % 2 === 0) {
      flag = 1;
    }
    for (let i = 3; i < number; i += 2) {
      if (number % i === 0) {
        flag = 1;
      }
    }
    if (flag === 0) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
};


function sumPrimes(number) {
  let sum = 0;
  for (let i = 1; i <= number; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  if (number >= 2) {
    sum += 1;
  }
  return sum;
}

export {
  sumPrimes,
};
