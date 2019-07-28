
function onChange(target, cb) {
  const proxy = new Proxy(target, {
    get(object, key) {
      if (typeof object[key] === 'object' && object[key] !== null) {
        return new Proxy(object[key], this);
      }
      return Reflect.get(object, key);
    },
    set(object, key, value) {
      cb();
      return Reflect.set(object, key, value);
    },
    defineProperty(object, key, value) {
      cb();
      return Reflect.defineProperty(object, key, value);
    },
    deleteProperty(object, key) {
      cb();
      return Reflect.deleteProperty(object, key);
    },
  });
  return proxy;
}

export {
  onChange,
};
