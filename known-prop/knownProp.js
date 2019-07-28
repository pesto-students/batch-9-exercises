
function knownProp(target) {
  const proxy = new Proxy(target, {
    get(obj, prop) {
      if (obj.hasOwnProperty(prop)) {
        return Reflect.get(obj, prop);
      }
      throw TypeError('Unknown property');
    },
  });

  return proxy;
}

export {
  knownProp,
};
