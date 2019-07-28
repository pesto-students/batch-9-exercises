
function greet(...string) {
  return Promise.resolve().then(() => `Hey ${string}`);
}

export {
  greet,
};
