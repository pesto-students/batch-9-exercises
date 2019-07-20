
function applyOperator(operator, ...args) {
  let result = 0;
  switch (operator) {
    case '+':
      result = args.reduce((accumulator, value) => accumulator + value, 0);
      break;
    case '-':
      result = args.reduce((accumulator, value) => accumulator - value, 0);
      break;
    case '*':
      result = args.reduce((accumulator, value) => accumulator * value, 1);
      break;
    case '/':
      result = args.reduce((accumulator, value) => accumulator / value, 1);
      break;
    case '%':
      result = args.reduce((accumulator, value) => accumulator % value);
      break;
    default:
      throw Error(`Expected: An arithmetic Operator, Received: ${args}`);
  }
  return result;
}

export {
  applyOperator,
};
