
const fibonacciIter = {
  [Symbol.iterator]: () => {
    let i = 1;
    let prev = 0;
    return {
      next: () => {
        const temp = prev;
        prev = i;
        i = temp + i;
        return { value: i, done: false };
      },
    };
  },
};

export {
  fibonacciIter,
};
