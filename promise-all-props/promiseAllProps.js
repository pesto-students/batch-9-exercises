
function promiseAllProps(obj = {}) {
  const promiseArray = Object.getOwnPropertyNames(obj).map(key => obj[key]);
  return Promise.all(promiseArray);
}

export {
  promiseAllProps,
};
