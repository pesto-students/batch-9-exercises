
function promiseAllProps(obj) {
  const keys = Object.getOwnPropertyNames(obj);
  const values = keys.map(key => obj[key]);
  return Promise.all(...values).then(obj);
}

export {
  promiseAllProps,
};
