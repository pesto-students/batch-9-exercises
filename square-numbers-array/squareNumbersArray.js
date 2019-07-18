
function checkIfNumberArray(arr) {
  return arr.find(isNaN) !== undefined;
}

function squareNumbersArray(...arr) {
  if (checkIfNumberArray(arr)) throw Error('My custom error');

  const result = arr.map(number => number ** 2);
  return result;
}



export { squareNumbersArray };
