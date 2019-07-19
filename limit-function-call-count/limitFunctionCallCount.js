function limitFunctionCallCount(cb, cbInvokeLimit) {
  return function (...args) {
    if (cbInvokeLimit > 0) {
      cbInvokeLimit -= 1;
      return cb(...args);
    }
    return null;
  };
}

export {
  limitFunctionCallCount,
};
