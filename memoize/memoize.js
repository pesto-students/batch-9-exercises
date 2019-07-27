
function memoize(cb) {
  const cache = new Map();
  return function innerFunc(...args) {
    const stringifiedArgs = args.toString();
    if (cache.has(stringifiedArgs)) {
      return cache.get(stringifiedArgs);
    }
    const result = cb(...args);
    cache.set(stringifiedArgs, result);
    return result;
  };
}

export {
  memoize,
};
