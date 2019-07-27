
function rangeIter(lb, ub) {
  if (!ub || typeof ub !== 'number') {
    throw TypeError(`${ub} is not a number`);
  }
  let copy = lb;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (copy <= ub) {
            copy += 1;
            return { value: copy - 1, done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}

export {
  rangeIter,
};
