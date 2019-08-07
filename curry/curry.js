
const curry = (fn, ...args) => ((fn.length === args.length)
  ? fn(...args)
  : (...moreArgs) => curry(fn, ...args, ...moreArgs));

export {
  curry,
};
