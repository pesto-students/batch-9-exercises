const sum = operands => operands.reduce((a, b) => a + b, 0);
const subtract = operands => operands.reduce((a, b) => a - b, 0);
const multiply = operands => operands.reduce((a, b) => a * b);
const divide = operands => operands.reduce((a, b) => a / b);
const mod = operands => operands.reduce((a, b) => a % b);


function applyOperator(operator, ...operands) {
  let result;
  if (operator === undefined) {
    throw new Error(`${operator} Not Supported Operator`);
  } else if (operands.length === 0) {
    result = 0;
  } else if (operator === '+') {
    result = sum(operands);
  } else if (operator === '-') {
    result = subtract(operands);
  } else if (operator === '*') {
    result = multiply(operands);
  } else if (operator === '/') {
    result = divide(operands);
  } else if (operator === '%') {
    result = mod(operands);
  }
  return result;
}

export {
  applyOperator,
};
