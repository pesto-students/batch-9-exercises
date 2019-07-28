
const fibonacciIter = {
  [Symbol.iterator]() {
    let prevFibonacciNumber = 0;
    let nextFibonacciNumber = 1;
    return {
      next() {
        const temp = prevFibonacciNumber;
        prevFibonacciNumber = nextFibonacciNumber;
        nextFibonacciNumber += temp;
        return {
          done: false,
          value: nextFibonacciNumber,
        };
      },
    };
  },
};

export {
  fibonacciIter,
};
