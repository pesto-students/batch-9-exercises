const fibonacciIter = {
  [Symbol.iterator]() {
    const array = [1, 2];
    let index = -1;
    return {
      next() {
        index++;
        const value = array[index]
          ? array[index]
          : array[array.length - 1] + array[array.length - 2];
        array[index] = value;

        return {
          value: value,
          done: false
        };
      }
    };
  }
};

export { fibonacciIter };
