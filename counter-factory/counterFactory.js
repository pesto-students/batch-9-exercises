
function counterFactory() {

  let count = 0;

  function incrementCount() {
    return ++count;
  }

  function decrementCount() {
    return --count;
  }

  return {
    increment: incrementCount,
    decrement: decrementCount,
  }
}

export {
  counterFactory,
};
