const doesPropertyExist = (target, property) => property in target;

const handler = {
  get(target, property) {
    if (!doesPropertyExist(target, property)) {
      throw new TypeError('Unknown property');
    }
    return target[property];
  },
};

function knownProp(object) {
  const proxy = new Proxy(object, handler);
  return proxy;
}

export {
  knownProp,
};
