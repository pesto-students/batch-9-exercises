
function counterFactory() {
  let count = 0;
  function _increment() {
    return ++count;
  }

  function _decrement() {
    return --count;
  }

  return {
    increment: _increment,
    decrement: _decrement,
  };
}

export {
  counterFactory,
};
