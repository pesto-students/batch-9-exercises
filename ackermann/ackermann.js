function ackermann(values) {
  const firstValue = values.m;
  const secondValue = values.n;
  if (firstValue < 0 || secondValue < 0) {
    throw new Error(`The object keys should have values greater than or equal to 0. Received: ${JSON.stringify(values)}`);
  }
  if (firstValue === 0) {
    return secondValue + 1;
  } if (firstValue > 0 && secondValue === 0) {
    return ackermann({ m: firstValue - 1, n: 1 });
  }
  return ackermann({ m: firstValue - 1, n: ackermann({ m: firstValue, n: secondValue - 1 }) });
}

export {
  ackermann,
};
