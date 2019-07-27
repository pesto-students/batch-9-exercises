
function setDefaultProperty(obj, defaultProperty) {
  const proxyHandler = {
    get(target, key) {
      const isKeyFound = Object.prototype.hasOwnProperty.call(target, key);
      if (!isKeyFound) {
        return defaultProperty;
      }
      return target[key];
    },
  };
  const proxyObj = new Proxy(obj, proxyHandler);
  return proxyObj;
}

export {
  setDefaultProperty,
};
