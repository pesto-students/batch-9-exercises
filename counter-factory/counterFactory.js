
function counterFactory() {
  // let counter = 0;
  return {
    counter: 0,
    increment() {
      this.counter += 1;
      return this.counter;
    },
    decrement() {
      this.counter -= 1;
      return this.counter;
    },
  };
}

export {
  counterFactory,
};
