
function limitFunctionCallCount(callback, limit) {
  return (..args) => {
    if (limit > 0) {
      limit -= 1;
      return callback(...args);
    }
  }

  return null;
}

export {
  limitFunctionCallCount,
};
