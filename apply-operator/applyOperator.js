const sum = operands => operands.reduce((a, b) => a + b, 0);
const subtract = operands => operands.reduce((a, b) => a - b, 0);
const multiply = operands => operands.reduce((a, b) => a * b);
const divide = operands => operands.reduce((a, b) => a / b);
const mod = operands => operands.reduce((a, b) => a % b);

function applyOperator(operator, ...operands) {
  if (!operator) {
    throw Error(`Expected: operator\nReceived: ${operator}`);
  }
  if (operands.length === 0) {
    return 0;
  }
  switch (operator) {
    case '+':
      return sum(operands);

    case '-':
      return subtract(operands);

    case '*':
      return multiply(operands);

    case '/':
      return divide(operands);

    case '%':
      return mod(operands);

    default:
      return 0;
  }
}

export {
  applyOperator,
};
