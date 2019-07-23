
function ackermann({ m, n }) {
  let result;
  if (m < 0) {
    throw Error(`Expected positive interger Received: ${m}`);
  }
  if (n < 0) {
    throw Error(`Expected positive interger Received: ${n}`);
  }
  if (m === 0) {
    result = n + 1;
  } else if (m > 0 && n === 0) {
    result = ackermann({ m: m - 1, n: 1 });
  } else {
    result = ackermann({ m: m - 1, n: ackermann({ m, n: n - 1 }) });
  }
  return result;
}

export {
  ackermann,
};
