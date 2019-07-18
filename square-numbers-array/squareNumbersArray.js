function squareNumbersArray(...args) {
  if (!args.every(Number)) {
    throw Error('My custom error');
  }
  return args.map(number => number ** 2);
}


export {
  squareNumbersArray,
};
