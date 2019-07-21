
function memoize(fn) {
  // eslint-disable-next-line prefer-const
  let cache = {};

  return (...args) => {
    let result;
    const key = args.toString();
    if (key in cache) {
      result = cache[key];
    } else {
      result = fn(...args);
      cache[key] = result;
    }
    return result;
  };
}

export {
  memoize,
};
