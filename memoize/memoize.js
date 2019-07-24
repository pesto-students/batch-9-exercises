
function memoize(randomFn) {
  const memo = {

  };
  function callback(...args) {
    if (!memo[args.toString()]) { memo[args.toString()] = randomFn.call(randomFn, ...args); }

    return memo[args.toString()];
  }
  return callback;
}

export {
  memoize,
};
