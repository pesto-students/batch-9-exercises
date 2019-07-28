
function simpleIterable() {
  return {
    [Symbol.iterator]() {
      let step = 0;
      return {
        next() {
          step += 1;
          if (step <= 5) {
            return {
              done: false,
              value: step,
            };
          }
          return {
            done: true,
            value: undefined,
          };
        },
      };
    },
  };
}

export {
  simpleIterable,
};
