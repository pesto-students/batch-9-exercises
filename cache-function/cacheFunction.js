
function cacheFunction(cb) {
  return arg => cb(arg);
}

export {
  cacheFunction,
};
