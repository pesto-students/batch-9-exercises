function setDefaultProperty(object, defaultValue) {
  const handler = {
    get: (target, key) => {
      if (key in object) {
        return object[key];
      }
      return defaultValue;
    }
  };

  return new Proxy(object, handler);
}

export { setDefaultProperty };
