
function simpleIterable() {
  let i = 0;
  const iterable = {
    [Symbol.iterator]() {
      return {
        next() {
          i += 1;
          if (i < 6) {
            return {
              value: i,
              done: false,
            };
          }
          return {
            value: undefined,
            done: true,
          };
        },
      };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
