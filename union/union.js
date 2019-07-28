
function union(array1, array2) {
  const set = new Set([...array1, ...array2]);
  return [...set];
}

export {
  union,
};
