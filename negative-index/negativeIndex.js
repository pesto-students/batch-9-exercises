/* eslint-disable prefer-rest-params */
const isNumber = (value) => {
  if (typeof value === 'symbol') {
    return false;
  }
  return !Number.isNaN(parseInt(value, 10));
};
function negativeIndex(iterableObj) {
  if (!Array.isArray(iterableObj)) {
    throw TypeError(`Only arrays are supported. Received Type:${typeof iterableObj}`);
  }
  const handler = {
    get(target, key) {
      if (isNumber(key)) {
        if (key < 0) {
          const indexRequested = parseInt(key, 10);
          const expectedKey = target.length + indexRequested;
          return target[expectedKey];
        }
        return target[key];
      }

      return target[key];
    },
    // eslint-disable-next-line consistent-return
    set(target, key, value) {
      if (isNumber(key)) {
        if (key > -1) {
          return Reflect.set(...arguments);
        }
        const indexRequested = parseInt(key, 10);
        const expectedKey = target.length + indexRequested;
        return Reflect.set(target, expectedKey, value);
      }
      return target;
    },
  };
  const proxyIterableObj = new Proxy(iterableObj, handler);
  return proxyIterableObj;
}

export {
  negativeIndex,
};
