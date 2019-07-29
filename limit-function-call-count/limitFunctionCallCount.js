function limitFunctionCallCount(callback, limit) {
  let limitCopy = limit;
  return (...args) => {
    if (limitCopy > 0) {
      limitCopy -= 1;
      return callback(...args);
    }
    return null;
  };
}

export { limitFunctionCallCount };
