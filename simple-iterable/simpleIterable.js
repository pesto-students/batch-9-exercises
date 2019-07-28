
function simpleIterable() {
  const iterable = {
    [Symbol.iterator]() {
      const maxIterations = 5;
      let currentIteration = 1;
      return {
        next() {
          if (currentIteration > maxIterations) {
            return { value: undefined, done: true };
          }
          const copyOfCurrentIteration = currentIteration;
          currentIteration += 1;
          return { value: copyOfCurrentIteration, done: false };
        },
      };
    },
  };
  return iterable;
}

export {
  simpleIterable,
};
