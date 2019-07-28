
function knownProp(target) {
  const proxy = new Proxy(target, {
    get(object, property) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(property)) {
        return target[property];
      }
      throw TypeError(`Object has no property ${property}`);
    },
  });
  return proxy;
}

export {
  knownProp,
};
