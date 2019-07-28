function rangeIter(start, end) {
  if (typeof start !== 'number') {
    throw TypeError(`${start} is not a number`);
  }

  if (typeof end !== 'number') {
    throw TypeError(`${end} is not a number`);
  }
  let i = start;
  const obj = {
    [Symbol.iterator]() {
      i = start;
      return this;
    },
    next() {
      if (i <= end) {
        return { value: i++, done: false };
      }
      return { value: '', done: true };
    },
  };

  return obj;
}

export {
  rangeIter,
};
