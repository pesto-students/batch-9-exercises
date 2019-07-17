const sum = numbers => numbers.reduce((a, b) => a + b);
const subtract = numbers => numbers.reduce((a, b) => a - b);
const multiply = numbers => numbers.reduce((a, b) => a * b);
const divide = numbers => numbers.reduce((a, b) => a / b);
const mod = numbers => numbers.reduce((a, b) => a % b);
function applyOperator(operator, ...numbers) {
  let result;
  if (operator === '+') {
    result = sum(numbers);
  } else if (operator === '-') {
    result = subtract(numbers);
  } else if (operator === '*') {
    result = multiply(numbers);
  } else if (operator === '/') {
    result = divide(numbers);
  } else if (operator === '%') {
    result = mod(numbers);
  } else {
    throw new Error('Operator Not Supported');
  }
  return result;
}

export {
  applyOperator,
};
