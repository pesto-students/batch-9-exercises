
function promiseAllProps(argObject) {

  const keys = Object.getOwnPropertyNames(argObject);
  const values = keys.map(key => argObject[key]);

  return Promise.all(...values).then(argObject);
}

export {
  promiseAllProps,
};
