function cacheFunction(callBack) {
  const cache = {};
  return function callBackHandler(args) {
    if (!Object.prototype.hasOwnProperty.call(cache, args)) {
      const callBackReturn = callBack(args);
      cache[args] = callBackReturn;
      return callBackReturn;
    }
    return cache[args];
  };
}

export {
  cacheFunction,
};
