
function* generatorIterable() {
  let i = 1;
  while (i < 6) {
    yield i;
    i += 1;
  }
}

export {
  generatorIterable,
};
