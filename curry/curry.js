function curry(func, ...args) {
  if (func.length === args.length) {
    return func(args);
  }
  return (...moreArgs) => curry(func, ...args, ...moreArgs);
}

export {
  curry,
};
