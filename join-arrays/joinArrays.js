function joinArrays(...args) {
  const isArray = value => Array.isArray(value);
  if (!args.every(isArray)) {
    throw new TypeError('All arguments should be of type array.');
  }
  const cumulativeArray = args.reduce((accumulator, array) => [...accumulator, ...array]);
  return cumulativeArray;
}

export {
  joinArrays,
};
