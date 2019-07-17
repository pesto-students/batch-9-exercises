
function factorial(...args) {
  if (args <= 1) {
    return 1;
  }
  return args * factorial(args - 1);
}

export {
  factorial,
};
