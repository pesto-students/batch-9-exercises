
function memoize(cb) {
  const cache = {};
  return (...args) => {
    const key = args.toString();
    if (key in cache) {
      return cache[key];
    }
    cache[key] = cb(...args);
    return cache[key];
  };
}

export {
  memoize,
};
