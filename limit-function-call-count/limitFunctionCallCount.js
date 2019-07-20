
function limitFunctionCallCount(callBack, callCount) {
  let count = 0;
  return function callCountLimiter(...args) {
    let returnValue = null;
    if (count < callCount) {
      count += 1;
      returnValue = callBack(...args);
    }
    return returnValue;
  };
}

export {
  limitFunctionCallCount,
};
