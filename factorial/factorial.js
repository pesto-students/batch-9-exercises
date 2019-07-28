
function factorial(number) {
  if (number === 0) {
    return 0;
  }
  let ans = 1;
  for (let i = 1; i <= number; i += 1) {
    ans *= i;
  }
  return ans;
}

export {
  factorial,
};
