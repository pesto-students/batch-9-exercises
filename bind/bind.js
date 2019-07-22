
function bind(fn, object, ...args) {
  return fn.bind(object, ...args);
}

export {
  bind,
};
