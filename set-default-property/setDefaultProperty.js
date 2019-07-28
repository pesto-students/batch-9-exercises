const doesPropertyExist = (target, property) => property in target;

function setDefaultProperty(object, defaultProperty) {
  const handler = {
    get(target, property) {
      if (!doesPropertyExist(target, property)) {
        return defaultProperty;
      }
      return target[property];
    },
  };

  const proxy = new Proxy(object, handler);
  return proxy;
}

export {
  setDefaultProperty,
};
