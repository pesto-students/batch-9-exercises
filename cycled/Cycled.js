/* eslint-disable no-plusplus */
/* eslint-disable no-empty-pattern */

function Cycled(array) {
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      while (true) {
        for (const {} of array) {
          if (this.index >= array.length) {
            this.index = 0;
          }
          return array[this.index++];
        }
      }
    },
    current() {
      return array[this.index];
    },
    index: 0,
  };
}

export {
  Cycled,
};
