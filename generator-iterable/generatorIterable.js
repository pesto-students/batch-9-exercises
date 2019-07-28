
function* generatorIterable(iterateTo = 5) {
  for (let i = 1; i <= iterateTo; i += 1) {
    yield i;
  }
}

export {
  generatorIterable,
};
