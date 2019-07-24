
function knownProp(target) {
  const handler = {
    get(object, property) {
      // eslint-disable-next-line no-prototype-builtins
      if (object.hasOwnProperty(property)) {
        return object[property];
      }
      throw TypeError(`${property} unknown`);
    },
  };

  const proxy = new Proxy(target, handler);

  return proxy;
}

export {
  knownProp,
};
