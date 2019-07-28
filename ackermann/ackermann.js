
function ackermann({ m = 0, n = 0 }) {
  if (m === 0) {
    return n + 1;
  }
  if (m > 0 && n === 0) {
    return ackermann({ m: m - 1, n: 1 });
  }
  return ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
}

export {
  ackermann,
};