
function isPromise(object) {
  return Promise.resolve(object) === object;
}

export {
  isPromise,
};
