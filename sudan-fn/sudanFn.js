function sudanFn({ n, x, y }) {
  if (y === 0 && n >= 0) {
    return x;
  }
  if (n === 0) {
    return x + y;
  }
  return sudanFn({
    n: n - 1,
    x: sudanFn({ n: n, x: x, y: y - 1 }),
    y: sudanFn({ n: n, x: x, y: y - 1 }) + y
  });
}

// function sudanFn(object) {
//   if (object.y === 0 && object.n >= 0) {
//     return object.x;
//   }
//   if (object.n === 0) {
//     return object.x + object.y;
//   }
//   return sudanFn({
//     n: object.n - 1,
//     x: sudanFn({ n: object.n, x: object.x, y: object.y - 1 }),
//     y: sudanFn({ n: object.n, x: object.x, y: object.y - 1 }) + object.y
//   });
// }

export { sudanFn };
