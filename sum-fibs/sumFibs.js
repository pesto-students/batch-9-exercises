const getFibonacciNumbers = (limit, array) => {
  const [secondLastNumber, lastNumber] = array.slice(array.length - 2);
  const nextNumber = secondLastNumber + lastNumber;
  if (nextNumber <= limit) {
    return getFibonacciNumbers(limit, [...array, nextNumber]);
  }
  return array;
};

const sum = numbers => numbers.reduce((accumulator, current) => accumulator + current, 0);

const isOdd = number => number % 2 === 1;

function sumFibs(limit) {
  const fibonacciArray = [1, 1];
  const oddFibonacciNumbers = getFibonacciNumbers(limit, fibonacciArray).filter(isOdd);
  return sum(oddFibonacciNumbers);
}

export {
  sumFibs,
};
