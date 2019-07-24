
function sudanFn({ n, x, y }) {
  if (n === 0) {
    return x + y;
  }
  if (y === 0 && n >= 0) {
    return x;
  }
  if (y >= 0 && n >= 0) {
    return sudanFn({
      n: n - 1,
      x: sudanFn({ n, x, y: y - 1 }),
      y: sudanFn({ n, x, y: y - 1 }) + y,
    });
  }
  throw new Error('Input is invalid');
}

export {
  sudanFn,
};
