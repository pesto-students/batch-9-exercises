function isEven(n) {
  if (!Number.isSafeInteger(n)) {
    throw new Error(`Expected number to be a safe integer. \n Received number:${n}`);
  }
  return n % 2 === 0;
}

export {
  isEven,
};
