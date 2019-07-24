function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const handler = {
    get: (target, key) => {
      if (key < 0) {
        key = parseInt(key, 10);
        return target[target.length + key];
      }
      return target[key];
    },

    set: (target, key, value) => {
      // key = parseInt(key, 10);
      if (key < 0) {
        target[target.length + key] = value;
        return true;
      } else {
        target[key] = value;
        return true;
      }
      return false;
    }
  };

  return new Proxy(array, handler);
}

export { negativeIndex };
