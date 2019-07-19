
function limitFunctionCallCount(randomFunction, maxCalls) {
  let callCount = 0;

  function callback(...args) {
    if (callCount >= maxCalls) { return null; }
    callCount += 1;
    return randomFunction.call(null, ...args);
  }
  return callback;
}

export {
  limitFunctionCallCount,
};
