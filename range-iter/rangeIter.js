
function rangeIter(lb, ub) {
  if (typeof lb !== 'number') {
    throw new TypeError(`${lb} is not a number`);
  }
  if (typeof ub !== 'number') {
    throw new TypeError(`${ub} is not a number`);
  }
  let copyOflb = lb;
  return {
    [Symbol.iterator]() {
      copyOflb = lb;
      return this;
    },
    next() {
      while (copyOflb <= ub) {
        // eslint-disable-next-line no-plusplus
        return { value: copyOflb++, done: false };
      }
      return { value: '', done: true };
    },
  };
}

export {
  rangeIter,
};
