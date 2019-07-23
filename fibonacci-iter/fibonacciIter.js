
const fibonacciIter = {
  [Symbol.iterator]() {
    return {
      fibNMinus1: 0,
      fibN: 1,
      next() {
        const fibOfNPlusOne = this.fibN + this.fibNMinus1;
        this.fibNMinus1 = this.fibN;
        this.fibN = fibOfNPlusOne;
        return { value: fibOfNPlusOne, done: false };
      },
    };
  },

};

export {
  fibonacciIter,
};
