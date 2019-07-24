function knownProp(object) {
  const handler = {
    get: (target, key) => {
      if (key in object) {
        return object[key];
      }
      throw new TypeError('Unknown property');
    }
  };

  return new Proxy(object, handler);
}

export { knownProp };
