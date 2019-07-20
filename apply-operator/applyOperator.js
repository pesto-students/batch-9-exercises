
function applyOperator(operator, ...operands) {
  let result;
  switch (operator) {
    case '/':
      result = operands.reduce((res, operand) => res / operand, 1);
      break;

    case '*':
      result = operands.reduce((res, operand) => res * operand, 1);
      break;

    case '+':
      result = operands.reduce((res, operand) => res + operand, 0);
      break;

    case '-':
      result = operands.reduce((res, operand) => res - operand, 0);
      break;

    case '%':
      result = operands.reduce((res, operand) => res % operand);
      break;
    default:
      throw Error('Invalid argument, first argument should be one of these oprators { /  * +  - % }');
  }
  return result;
}

export {
  applyOperator,
};
