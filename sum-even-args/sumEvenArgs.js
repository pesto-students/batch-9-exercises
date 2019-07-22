const sumFn = condition => (array) => {
  let sumValue = 0;
  array.forEach((value) => {
    if (condition(value)) {
      sumValue += value;
    }
  });
  return sumValue;
};

function sumEvenArgs(...args) {
  const sumEven = sumFn(x => x % 2 === 0);
  return sumEven(args);
}

export {
  sumEvenArgs,
};
