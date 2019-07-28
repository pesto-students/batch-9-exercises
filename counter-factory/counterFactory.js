
function counterFactory() {
  let count = 0;
  const counter = {

    increment() {
      count += 1;
      return count;
    },

    decrement() {
      count -= 1;
      return count;
    },
  };
  return counter;
}

export {
  counterFactory,
};
