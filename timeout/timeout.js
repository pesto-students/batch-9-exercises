
function timeout(name) {
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(`Hello ${name}`);
    });
  });
  return promise;
}

export {
  timeout,
};
