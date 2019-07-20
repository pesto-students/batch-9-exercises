
function factorial(number) {
  let fact = 1;
  if (number !== 0) {
    fact = number * factorial(number - 1);
  }
  return fact;
}

export {
  factorial,
};
