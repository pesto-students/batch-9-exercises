
function bind(fn, person, ...args) {
  return fn.bind(person, ...args);
}

export {
  bind,
};
