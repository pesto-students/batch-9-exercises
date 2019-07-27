
function simpleIterable() {
  let count = 0;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (count < 5) {
            count += 1;
            return { value: count, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
