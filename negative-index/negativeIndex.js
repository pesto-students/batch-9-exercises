
function negativeIndex(target) {
  if (!Array.isArray(target)) {
    throw TypeError('Only arrays are supported');
  }
  const proxy = new Proxy(target, {
    get(array, property) {
      if (typeof property === 'string') {
        const num = parseInt(property, 10);
        if (!isNaN(num)) {
          if (num < 0) {
            return array[array.length + num];
          }
        }
      }
      return array[property];
    },

    set(array, property, value) {
      const num = parseInt(property, 10);
      if (!isNaN(num)) {
        if (num < 0) {
          array[array.length + num] = value;
        } else {
          array[num] = value;
        }
      } else {
        array[property] = value;
      }
      return true;
    },
  });
  return proxy;
}

export {
  negativeIndex,
};
