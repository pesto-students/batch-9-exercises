function rangeIter(start, end) {
  if (!start || !end) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof end !== 'number') {
    throw new TypeError('a is not a number');
  }
  if (start > end) {
    return [];
  }
  if (start === end) {
    return [start];
  }

  let copy = end;

  console.log('here here');
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (copy <= start) {
            copy += 1;
            console.log(copy);
            return { value: copy - 1, done: false };
          }
          return { value: undefined, done: true };
        }
      };
    }
  };
}

export { rangeIter };
