
function permutateWithoutRepetitions(...args) {
  const results = [];
  if (args.length === 1) {
    results.push(args);
    return results;
  }
  return args;
}

export {
  permutateWithoutRepetitions,
};
