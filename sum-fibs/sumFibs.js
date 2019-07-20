const fibMemo = { 0: 0, 1: 1 };
function getFib(n) {
  if (!fibMemo[n] && fibMemo[n] !== 0) {
    fibMemo[n] = getFib(n - 1) + getFib(n - 2);
  }
  return fibMemo[n];
}

function sumFibs(num) {
  let sum = 0;
  for (let i = 1; i <= num && sum <= num; i += 1) {
    const currentFib = getFib(i);
    if (((currentFib % 2) === 1) && currentFib <= num) {
      sum += currentFib;
    }
  }
  return sum;
}
export {
  sumFibs,
};
