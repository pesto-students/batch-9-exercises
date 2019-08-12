function bind(fn, data, ...args) {
  return (...otherArguments) => {
    const innerFunctionArguments = [...args, ...otherArguments];
    return fn.apply(data, innerFunctionArguments);
  };
}

export {
  bind,
};
