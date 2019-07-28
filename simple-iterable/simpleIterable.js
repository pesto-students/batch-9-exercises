
function simpleIterable() {
  let i = 0;
  return {
    [Symbol.iterator]() {
      i = 0;
      return this;
    },
    next() {
      if (i < 5) {
        return { value: ++i, done: false };
      }
      return { value: undefined, done: true };
    },
  };
}

export {
  simpleIterable,
};
