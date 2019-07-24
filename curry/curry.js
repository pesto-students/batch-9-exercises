
function curry(Fn, ...args) {
  const allArgumentsSupplied = Fn.length === args.length;

  if (allArgumentsSupplied) {
    const finalResult = Fn(...args);
    return finalResult;
  }

  const curriedFn = (...waitingArgs) => curry(Fn, ...args, ...waitingArgs);
  return curriedFn;
}

export {
  curry,
};
