function getfibonacci(ub = Number.MAX_SAFE_INTEGER) {
  let firstNumber = 0;
  let secondNumber = 1;
  let nextNumber = 0;

  const fibIterator = {
    next() {
      if (nextNumber < ub) {
        nextNumber = firstNumber + secondNumber;
        firstNumber = secondNumber;
        secondNumber = nextNumber;
        return { value: nextNumber, done: false };
      }
      return { value: nextNumber, done: true };
    },

  };
  return fibIterator;
}


function fibonacciIter() {
  return getfibonacci.next();
}

export {
  fibonacciIter,
};
