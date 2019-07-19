
function cacheFunction(randomFn) {
  const memomize = {

  };
  function callback(args) {
    if (!memomize[String(args)]) { memomize[String(args)] = randomFn(args); }
    return memomize[String(args)];
  }
  return callback;
}

export {
  cacheFunction,
};
