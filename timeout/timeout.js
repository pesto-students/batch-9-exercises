
function timeout(name) {
  return new Promise((resolve) => {
    setTimeout(resolve.bind(null, name), 300);
  });
}

export {
  timeout,
};
