
function Cycled(array) {
  let index = 0;
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      index += 1;
      if (index < 3) {
        return array[index];
        // eslint-disable-next-line no-unreachable
        index += 1;
      }
      index = 0;
      return array[index];
    },
    current() {
      return array[index];
    },
    previous() {
      return array[index];
    },
    step(_step) {
      index += _step;
      return this.current();
    },
    index,
  };
}

export {
  Cycled,
};
