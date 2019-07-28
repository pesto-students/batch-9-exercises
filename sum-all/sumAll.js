
function sumOneToN(n) {
  return (n * (n + 1)) / 2;
}

function sumAll(range) {
  const upperBound = range[0] > range[1] ? range[0] : range[1];
  const lowerBound = range[0] < range[1] ? range[0] : range[1];

  const requiredSum = sumOneToN(upperBound) - sumOneToN(lowerBound - 1);

  return requiredSum;
}


export { sumAll };
