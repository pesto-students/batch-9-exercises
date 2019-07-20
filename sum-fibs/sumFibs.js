const generateNextFibonacci = (initial, next) => {
  const newFib = initial + next;
  return newFib;
};

function sumFibs(limit) {
  let first = 1;
  let second = 1;
  let sumFib = 1;
  while (second <= limit) {
    if (second % 2 !== 0) {
      sumFib += second;
    }
    const temp = second;
    second = generateNextFibonacci(first, second);
    first = temp;
  }
  return sumFib;
}

export {
  sumFibs,
};
