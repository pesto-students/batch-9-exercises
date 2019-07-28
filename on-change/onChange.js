
function onChange(target, cb) {
  const proxy = new Proxy(target, {
    get(obj, key) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        return new Proxy(obj[key], this);
      }
      return Reflect.get(obj, key);
    },

    set(obj, key, value) {
      cb();
      return Reflect.set(obj, key, value);
    },

    defineProperty(obj, key, desc) {
      cb();
      return Reflect.defineProperty(obj, key, desc);
    },

    deleteProperty(obj, key) {
      cb();
      return Reflect.deleteProperty(obj, key);
    },

  });
  return proxy;
}

export {
  onChange,
};
