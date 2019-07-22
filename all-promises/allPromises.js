
function allPromises(...promiseArray) {
  return Promise.all(promiseArray).then();
}

export {
  allPromises,
};
