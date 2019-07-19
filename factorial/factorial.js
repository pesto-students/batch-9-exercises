
function factorial(number) {
  if (typeof number !== 'number') {
    throw TypeError('Expected type number, received type : ' + typeof number);
  }
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
}

export {
  factorial,
};
