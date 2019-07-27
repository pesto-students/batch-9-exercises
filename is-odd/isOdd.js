const modulus = baseNumber => number => number - ((Math.floor(number / baseNumber)) * baseNumber);
const modWith2 = modulus(2);

function isOdd(args) {
  if (modWith2(args) !== 0) {
    return true;
  }
  return false;
}

export {
  isOdd,
};
