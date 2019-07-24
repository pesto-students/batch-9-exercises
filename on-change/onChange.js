
function onChange(obj, onChangeFn) {
  const handler = {
    set(target, property, value) {
      onChangeFn();
      return Reflect.set(target, property, value);
    },
    defineProperty() {
      onChangeFn();
      return true;
    },
    // eslint-disable-next-line consistent-return
    deleteProperty(target, prop) {
      if (prop in target) {
        // eslint-disable-next-line no-param-reassign
        delete target[prop];
        onChangeFn();
        return true;
      }
    },
  };
  const proxyObj = new Proxy(obj, handler);
  return proxyObj;
}

export {
  onChange,
};
