
function greet(name) {
  return Promise.resolve(name).then(() => `Hey ${name}`);
}

export {
  greet,
};
