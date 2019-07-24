/* eslint-disable prefer-rest-params */

function negativeIndex(iterableObj) {
  if (!Array.isArray(iterableObj)) {
    throw TypeError(`Only arrays are supported. Received Type:${typeof iterableObj}`);
  }
  const handler = {
    get(target, key) {
      if (key < 0) {
        const indexRequested = parseInt(key, 10);
        const expectedKey = target.length + indexRequested;
        return target[expectedKey];
      }

      return target[key];
    },
    // eslint-disable-next-line consistent-return
    set(target, key) {
      if (key > -1) {
        return Reflect.set(...arguments);
      }
    },
  };
  const proxyIterableObj = new Proxy(iterableObj, handler);
  return proxyIterableObj;
}

export {
  negativeIndex,
};
