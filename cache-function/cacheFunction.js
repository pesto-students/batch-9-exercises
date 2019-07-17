
function cacheFunction(cb) {
  const cache = {};
  return (args) => {
    if (cache[args]) {
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
