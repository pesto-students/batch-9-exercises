function sudanFn(object) {
  if (object.y === 0 && object.n >= 0) {
    return object.x;
  }
  if (object.n === 0) {
    return object.x + object.y;
  }
  return sudanFn({
    n: object.n - 1,
    x: sudanFn({ n: object.n, x: object.x, y: object.y - 1 }),
    y: sudanFn({ n: object.n, x: object.x, y: object.y - 1 }) + object.y
  });
}

export { sudanFn };
