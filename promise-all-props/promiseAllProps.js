
function promiseAllProps(object) {
  return Promise.all(Object.values(object))
    .then((result) => {
      const obj = {};
      Object.keys(object).forEach((key, i) => {
        obj[key] = result[i];
      });
      return obj;
    });
}

export {
  promiseAllProps,
};
