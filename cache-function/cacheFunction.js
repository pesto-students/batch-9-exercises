
function cacheFunction(fun) {
  // eslint-disable-next-line no-var
  var cache = {};
  return (args) => {
    let result;
    if (args in cache) {
      result = cache[args];
    } else {
      result = fun(args);
      cache[args] = result;
    }
    return result;
  };
}

export {
  cacheFunction,
};
