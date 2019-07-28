function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  const handler = {
    get(target, property) {
      if (typeof property !== 'string') {
        return Reflect.get(target, property);
      }

      const index = Number(property);
      if (Number.isNaN(index)) {
        return Reflect.get(target, property);
      }

      return target[index < 0 ? target.length + index : index];
    },

    set(target, property, value) {
      if (typeof property !== 'string') {
        return Reflect.set(target, property, value, receiver);
      }

      const index = Number(property);

      if (Number.isNaN(index)) {
        return Reflect.set(target, property, value, receiver);
      }

      target[index < 0 ? target.length + index : index] = value;

      return true;
    }
  };

  return new Proxy(array, handler);
}

export { negativeIndex };
