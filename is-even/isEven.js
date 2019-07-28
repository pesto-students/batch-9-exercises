function isEven(n) {
  if (!Number.isSafeInteger(n)) {
    throw new Error(`Expected number to be a safe integer. \n Received number:${n}`);
  }
  // eslint-disable-next-line no-bitwise
  if ((n & 1) === 0) {
    return true;
  }
  return false;
}

export {
  isEven,
};
