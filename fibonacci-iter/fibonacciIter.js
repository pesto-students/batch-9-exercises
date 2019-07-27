
const fibonacciIter = {
  [Symbol.iterator]() {
    let previousNumber = 0;
    let nextNumber = 1;
    return {
      next() {
        const temp = previousNumber;
        previousNumber = nextNumber;
        nextNumber += temp;
        return { value: nextNumber, done: false };
      },
    };
  },
};

export {
  fibonacciIter,
};
