/* eslint-disable no-param-reassign */
const isNumber = (value) => {
  if (typeof value === 'symbol') {
    return false;
  }
  return !Number.isNaN(parseInt(value, 10));
};


const handler = {
  get(target, property) {
    if (isNumber(property)) {
      if (property < 0) {
        return target[target.length + parseInt(property, 10)];
      }
      return target[property];
    }
    return target[property];
  },
  set(target, property, receiver) {
    if (isNumber(property)) {
      if (property >= 0) {
        target[property] = receiver;
        return target;
      }
      target[target.length + parseInt(property, 10)] = receiver;
      return target;
    }
    return target;
  },
};
function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }
  const proxy = new Proxy(array, handler);
  return proxy;
}

export {
  negativeIndex,
};
