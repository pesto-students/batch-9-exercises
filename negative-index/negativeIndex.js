
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Only arrays are supported');
  }
  const proxy = new Proxy(array, {
    get(target, index) {
      if (index === 'length') {
        return target.length;
      }
      if (index === 'toString') {
        return Array.toString(target);
      }
      index = parseInt(index, 10);
      if (index < 0) {
        index += target.length;
      }
      return target[index];
    },
    set(target, index, value) {
      target[index] = value;
      return true;
    },
  });
  return proxy;
}

export {
  negativeIndex,
};
