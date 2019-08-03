const strictTypeCheck = value => Object.prototype.toString.call(value)
  .slice(8, -1);

function repeatStringNumTimes(string, iterations) {
  if (strictTypeCheck(string) !== 'String') {
    throw new TypeError(`Expected: First argument typeof String, Received: ${strictTypeCheck(string)}`);
  }
  if (strictTypeCheck(iterations) !== 'Number' || !Number.isFinite(iterations)) {
    throw new TypeError(`Expected: Second argument typeof Number and finite, Received: ${iterations}`);
  }
  if (iterations < 1) {
    return string.repeat(0);
  }
  return string.repeat(iterations);
}

export {
  repeatStringNumTimes,
};
