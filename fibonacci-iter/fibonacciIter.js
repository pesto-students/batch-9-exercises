
const fibonacciIter = {
  fibNMinus1: 0,
  fibN: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    const fibOfNPlusOne = this.fibN + this.fibNMinus1;
    this.fibN = fibOfNPlusOne;
    this.fibNMinus1 = this.fibN;
    return { value: fibOfNPlusOne, done: false };
  },

};

export {
  fibonacciIter,
};
