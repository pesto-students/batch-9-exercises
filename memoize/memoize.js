
function memoize(cb) {
  const cache = {};
  return function innerFunc(...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = cb(args);
    cache[args] = result;
    return args;
  };
}

export {
  memoize,
};
