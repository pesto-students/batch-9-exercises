function curry(func, ...args) {
  if (func.length === args.length) {
    return func(...args);
  }
  return (...restOfArgs) => curry(func, ...args, ...restOfArgs);
}

export {
  curry,
};
