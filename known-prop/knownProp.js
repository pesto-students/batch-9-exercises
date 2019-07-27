
function knownProp(obj) {
  const proxyHandler = {
    get(target, key) {
      const isKeyFound = Object.prototype.hasOwnProperty.call(target, key);
      if (!isKeyFound) {
        throw TypeError('Unknown property');
      }
      return target[key];
    },
  };
  const proxyObj = new Proxy(obj, proxyHandler);
  return proxyObj;
}

export {
  knownProp,
};
