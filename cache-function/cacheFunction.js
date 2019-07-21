
function cacheFunction(randomFn) {
  const memomize = {

  };
  const callback = (args) => {
    if (!(Object.prototype.hasOwnProperty.call(memomize, args))) {
      memomize[args] = randomFn(args);
    }
    return memomize[args];
  };
  return callback;
}

export {
  cacheFunction,
};
