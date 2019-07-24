
const handler = {
  get(target, property) {
    if (property in target) {
      return target[property];
    }
    throw new TypeError('Unknown property');
  },
};


function knownProp(object) {
  const proxy = new Proxy(object, handler);
  return proxy;
}

export {
  knownProp,
};
