import { isNumber } from 'util';

function rangeIter(start, end) {
  if (!start || !end) {
    throw new TypeError('undefined is not a number');
  }

  if (!isNumber(end)) {
    throw new TypeError('a is not a number');
  }
  if (start > end) {
    return [];
  }
  if (start === end) {
    return [start];
  }

  let copy = end;

  [Symbol.iterator] = () => {
    return {
      next() {
        if (copy <= start) {
          copy += 1;
          return { value: copy - 1, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  };
}

// rangeIter(-1, -1);
export { rangeIter };
