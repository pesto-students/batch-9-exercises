
function memoize(fn) {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (cache[key]) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

export {
  memoize,
};
