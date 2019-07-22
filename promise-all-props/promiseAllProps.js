
function promiseAllProps(obj = {}) {
  const promiseArray = Object.keys(obj).map(key => obj[key]);
  return Promise.all(promiseArray);
}

export {
  promiseAllProps,
};
