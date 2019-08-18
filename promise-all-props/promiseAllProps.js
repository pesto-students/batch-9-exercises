function promiseAllProps(object) {
  const values = Object.values(object);
  return Promise.all(values)
    .then(resolvedValues => Object.keys(object)
      .reduce((accumulator, key, index) => (
        { ...accumulator, [key]: resolvedValues[index] }
      ), {}));
}

export {
  promiseAllProps,
};
