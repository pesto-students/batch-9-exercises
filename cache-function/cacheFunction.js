
function cacheFunction(cb = () => { }) {
  const cache = {};
  return (arg) => {
    if (arg in cache) {
      return cache[arg];
    }
    const result = cb(arg);
    cache[arg] = result;
    return result;
  };
}

export {
  cacheFunction,
};
