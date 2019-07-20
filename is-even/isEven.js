
function isEven(number) {
  if (typeof number !== 'number') {
    throw TypeError('Expected type number, received type : ' + typeof number);
  }
  return (number & 1) === 0;
}

export {
  isEven,
};
