/* eslint-disable */
function counterFactory() {
  let i = 0;
  return {
    increment() {
      return ++i;
    },

    decrement() {
      return --i;
    }
  }
}

export {
  counterFactory,
};
