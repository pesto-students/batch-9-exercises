
function nthArg(argumentIndex) {
  const initialNumberOfArgs = 1;
  let dynamicArgs = initialNumberOfArgs;
  if (argumentIndex >= 0) {
    dynamicArgs += argumentIndex;
  }
  const args = Array(dynamicArgs).fill('');
  const functionExecution = 'return arguments[argumentIndex];';
  const requiredFn = new Function(...args, functionExecution);
  return requiredFn;
}

export {
  nthArg,
};
