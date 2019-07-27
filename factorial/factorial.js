
function factorial(args) {
  let value = 0;
  if (args !== 0) {
    value = args * factorial(args - 1);
  } else {
    return 1;
  }
  return value;
}

export {
  factorial,
};
