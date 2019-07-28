
function curry(fn, ...args) {
  return fn.length === args.length ? fn(...args) : (...moreArgs) => curry(fn, ...args, ...moreArgs);
}

export {
  curry,
};
