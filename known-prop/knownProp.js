function knownProp(object) {
  const proxy = new Proxy(object, {
    get(target, property) {
      if (Object.keys(target).includes(property)) {
        return target[property];
      }
      throw new TypeError('Unknown Property : ', property);
    },
  });
  return proxy;
}

export {
  knownProp,
};
