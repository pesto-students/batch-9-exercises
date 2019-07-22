
function bind(fn, person, args) {
  const bindFn = (...curriedArgs) => {
    if (!args) {
      // eslint-disable-next-line no-param-reassign
      args = curriedArgs;
    }
    return fn.call(person, args);
  };
  return bindFn;
}

export {
  bind,
};
