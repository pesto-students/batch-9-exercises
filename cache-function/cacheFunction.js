
function cacheFunction(callBack = () => { }) {
  const cache = {};
  return (args) => {
    if (args in cache) {
      return cache[args];
    }
    const result = callBack(args);
    cache[args] = result;
    return result;
  };
}

export {
  cacheFunction,
};
