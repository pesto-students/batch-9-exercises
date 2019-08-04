const strictTypeCheck = value => Object.prototype.toString.call(value)
  .slice(8, -1);

function objectPairs(object) {
  if (strictTypeCheck(object) !== 'Object') {
    throw TypeError(`Expected: object argument, Received: ${strictTypeCheck(object)}`);
  }
  return Object.entries(object);
}

export {
  objectPairs,
};
