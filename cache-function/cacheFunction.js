
function cacheFunction(cb) {
  const cache = {};
  return (args) => {
    if (Object.prototype.hasOwnProperty.call(cache, args)) {
      return cache[args];
    }
    cache[args] = cb(args);
    return cache[args];
  };
}

export {
  cacheFunction,
};
