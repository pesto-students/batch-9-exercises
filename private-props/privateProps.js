
function privateProps(target, filter) {
  const handler = {
    get(obj, key) {
      return Reflect.get(obj, key);
    },
    set(obj, key, prop) {
      if (filter(key)) {
        return false;
      }
      return Reflect.set(obj, key, prop);
    },
    has(obj, key) {
      if (filter(key)) {
        return false;
      }
      return key in obj || obj.hasItem(key);
    },
    ownKeys(obj) {
      return Object.keys(obj).filter(key => !filter(key));
    },
    getOwnPropertyDescriptors(obj, key) {
      if (filter(key)) {
        return false;
      }
      const value = obj.getItem(key);
      return value ? {
        value,
        writable: true,
        enumerable: true,
        configurable: false,
      } : undefined;
    },
  };
  const proxy = new Proxy(target, handler);
  return proxy;
}

export {
  privateProps,
};
