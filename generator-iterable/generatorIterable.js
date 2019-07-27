function* generatorIterable() {
  let value = 0;
  while (value < 5) {
    value++;
    yield value;
  }
}

export { generatorIterable };
