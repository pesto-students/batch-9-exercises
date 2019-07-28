
function promiseAllProps(object) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  return Promise.all(values)
    .then(resolvedValues => keys
      .reduce((acc, key, index) => ({ ...acc, [key]: resolvedValues[index] }), {}));
}

export {
  promiseAllProps,
};
