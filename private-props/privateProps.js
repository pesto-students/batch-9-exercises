
function privateProps(obj, isPrivate) {
  const proxyHandler = {
    get(target, property) {
      if (isPrivate(property)) {
        return `${target.secret.substr(0, 4)} ... shhhh!`;
      }
      return target;
    },
    set(...args) {
      return Reflect.set(...args);
    },
    has(target, key) {
      if (isPrivate(key)) {
        return false;
      }
      return key in target;
    },
  };
  return new Proxy(obj, proxyHandler);
}

export {
  privateProps,
};
