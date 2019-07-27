
function sudanFn({ n, x, y }) {
  if (y === 0 && n >= 0) {
    return x;
  }
  if (n === 0) {
    return x + y;
  }

  return sudanFn({ n: n - 1, x: sudanFn({ n, x, y: y - 1 }), y: sudanFn({ n, x, y: y - 1 }) + y });
}

export {
  sudanFn,
};
