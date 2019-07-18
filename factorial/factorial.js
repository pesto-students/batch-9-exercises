
function factorial(input) {
  let fact = 1;
  while (input > 0) {
    fact *= input;
    // eslint-disable-next-line no-param-reassign
    input -= 1;
  }
  return fact;
}

export {
  factorial,
};
