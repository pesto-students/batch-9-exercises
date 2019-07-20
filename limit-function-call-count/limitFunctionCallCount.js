
function limitFunctionCallCount(fn, callLimit) {
  let counter = 0;
  return (...args) => {
    let result = null;
    if (counter < callLimit) {
      result = fn(...args);
      counter += 1;
    }
    return result;
  };
}

export {
  limitFunctionCallCount,
};
