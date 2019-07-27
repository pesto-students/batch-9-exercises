
function isTriangle(...args) {
  const arr = args.sort();
  if (((arr[0] ** 2) + (arr[1] ** 2)) === (arr[2] ** 2)) {
    return true;
  }
  return false;
}

export {
  isTriangle,
};
