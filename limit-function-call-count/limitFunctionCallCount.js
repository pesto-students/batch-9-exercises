
function limitFunctionCallCount(cb, limit) {
  let count = 0;
  return (...args) => {
    let returnValue = null;
    if (count < limit) {
      returnValue = cb(...args);
      count += 1;
    }
    return returnValue;
  };
}

export {
  limitFunctionCallCount,
};
