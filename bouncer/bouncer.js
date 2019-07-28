
function checkIfValueIsFalsy(value) {
  if (value === '' || value === null || value === undefined || value === 0 || value === false || `${value}` === 'NaN') {
    return true;
  }
  return false;
}

function bouncer(arr) {
  if (!arr) {
    throw new Error(
      `The variable cannot be processed as it is: ${arr}`,
    );
  }
  const bouncedArray = arr.filter(iThArrayValue => !checkIfValueIsFalsy(iThArrayValue));
  return bouncedArray;
}

export { bouncer };
