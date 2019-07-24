
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
    deleteProperty(target, prop) {
      if (prop in target) {
        delete target[prop];
        onChangeFn();
        return true;
      }
    }
  };
  const proxyObj = new Proxy(obj, handler);
  return proxyObj;
}

export {
  onChange,
};
