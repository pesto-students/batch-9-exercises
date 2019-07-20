
function limitFunctionCallCount(cb, limit) {
  let count = 0;
  return (...args) => {
    if (count < limit) {
      count += 1;
      return cb(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
