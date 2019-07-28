
function applyOperator(operation, ...numbers) {
  if (arguments.length < 1) {
    throw Error(`Expected Number of Arguments: (>2) \n Received Number of Argumnets:${arguments.length}`);
  }
  let output;
  const hasNumbers = numbers.length > 0;
  switch (operation) {
    case '+': output = hasNumbers && numbers.reduce((accumulator, number) => accumulator + number);
      break;
    case '-': output = hasNumbers && numbers.reduce((accumulator, number) => accumulator - number, 0);
      break;
    case '*': output = hasNumbers && numbers.reduce((accumulator, number) => accumulator * number);
      break;
    case '/': output = hasNumbers && numbers.reduce((accumulator, number) => accumulator / number);
      break;
    case '%': output = hasNumbers && numbers.reduce((accumulator, number) => accumulator % number);
      break;
    default: throw Error(`Invalid Operation Requested.\n Expected:(+,-,*,/,%) \n Received:${operation}`);
  }
  if (!output) {
    return 0;
  }
  return output;
}

export {
  applyOperator,
};
