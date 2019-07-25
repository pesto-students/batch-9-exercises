
function smallestCommons(range) {
  const numbers = range.sort((a, b) => a - b);
  const min = numbers[0];
  const max = numbers[numbers.length - 1];
  let result;

  const gcd = (x, y) => {
    if (y === 0) {
      return x;
    }
    return gcd(y, x % y);
  }

  for (let i = min; i < max; i++) {
    if (i === min) {
      result = i * (i + 1) / gcd(i, i + 1);
    } else {
      result = result * (i + 1) / gcd(result, i + 1);
    }
    console.log(result);
  }
  return result;
}

export {
  smallestCommons,
};
