
function onChange(object, cb) {
  const handler = {
    get(target, property) {
      cb();
      return target[property];
    },
    set(target, property, value) {
      cb();
      // eslint-disable-next-line no-param-reassign
      target[property] = value;
      return true;
    },
    defineProperty(target, property, descriptor) {
      if (descriptor.configurable === false || descriptor.writable === false) {
        throw new Error('Violates Invariant.');
      }
      cb();
      return true;
    },
    deleteProperty(target, property) {
      const descriptor = Object.getOwnPropertyDescriptor(target, property);
      if (descriptor.configurable === false) {
        throw new Error('Property is not configurable.');
      }
      cb();
      return true;
    },
    isExtensible(target) {
      return Object.isExtensible(target);
    },
  };
  const proxy = new Proxy(object, handler);
  return proxy;
}

export {
  onChange,
};
