
function isOdd(number) {
  if (typeof number !== 'number') {
    throw TypeError('Expected type number, received type : ' + typeof number);
  }
  return Boolean(number & 1);
}

export {
  isOdd,
};
