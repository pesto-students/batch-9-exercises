function calculateFib(upperLimit, fibArray) {
  const [secondLatNum, lastNum] = fibArray.slice(fibArray.length - 2);
  const nextNum = secondLatNum + lastNum;
  if (upperLimit >= nextNum) {
    return calculateFib(upperLimit, [...fibArray, nextNum]);
  }
  return fibArray;
}

const isOdd = num => num % 2 !== 0;

const sum = numbers => numbers.reduce((result, value) => result + value, 0);

function sumFibs(upperLimit) {
  const fibArray = [0, 1];
  const oddFibonacciSeries = calculateFib(upperLimit, fibArray).filter(isOdd);
  return sum(oddFibonacciSeries);
}

export {
  sumFibs,
};
