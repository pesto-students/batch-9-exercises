
 function isIterable(args) {
    if (args == null) {
      return false;
    }
    return typeof args[Symbol.iterator] === 'function';
  }

export {
  isIterable,
};
