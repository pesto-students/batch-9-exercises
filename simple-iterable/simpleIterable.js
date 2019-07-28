
function simpleIterable() {
  let i = 0;
  return {
    [Symbol.iterator]: () => ({
      next() {
        i += 1;
        if (i <= 5) {
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
    }),
  };
}

export {
  simpleIterable,
};
