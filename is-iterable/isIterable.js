
function isIterable(element) {
  return typeof element[Symbol.iterator] === 'function';
}

export {
  isIterable,
};
