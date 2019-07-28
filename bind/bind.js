
function bind(fn, obj, ...args) {
  return fn.bind(obj, ...args);
}

export {
  bind,
};
