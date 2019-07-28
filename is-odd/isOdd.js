
function isOdd(n) {
  // eslint-disable-next-line no-bitwise
  if ((n & 1) === 0) {
    return false;
  }
  return true;
}

export {
  isOdd,
};
