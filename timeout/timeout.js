
function timeout(msg) {
  const delayedPromise = new Promise((resolve) => {
    setTimeout(() => resolve(msg), 2000);
  });
  return delayedPromise;
}

export {
  timeout,
};
