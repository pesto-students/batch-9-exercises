function memoize(fn) {
  const memoizedFunctions = {};

  return (...args) => {
    let result;
    const key = args;
    if (key in memoizedFunctions) {
      result = memoizedFunctions[key];
    } else {
      result = fn(...args);
      memoizedFunctions[key] = result;
    }
    return result;
  };
}

export { memoize };
