
function sumFibs(limit) {
  let a = 1;
  let b = 1;
  let c = a + b;
  let sum = c;
  while (c <= limit) {
    [a, b] = [b, c];
    c = a + b;
    // eslint-disable-next-line no-bitwise
    if (c <= limit && Boolean(c & 1)) {
      sum += c;
    }
  }
  return sum;
}

export {
  sumFibs,
};
