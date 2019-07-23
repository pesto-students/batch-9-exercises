
function isIterable(unknownItem) {
  return typeof unknownItem[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
