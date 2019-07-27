
function cacheFunction(cb) {
  const cache = {};
  return (args) => {
    if (args in cache) {
      return cache[args];
    }
    const result = cb(args);
    cache[args] = result;
    return result;
  };
}

export {
  cacheFunction,
};
