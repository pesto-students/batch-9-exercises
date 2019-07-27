
function isPromise(args) {

  return Promise.resolve(args) === args;

}
export {
  isPromise,
};
