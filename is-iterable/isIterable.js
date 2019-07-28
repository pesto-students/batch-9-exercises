function isIterable(value) {
  return typeof value[Symbol.iterator] === 'function';
}

export { isIterable };
