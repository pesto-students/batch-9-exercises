class Cycled {
  constructor(array) {
    this.array = array;
    this.index = 0;
  }

  current() {
    return this.generator();
  }

  next() {
    console.log(this.gen().next());
    return this.array[this.gen().next().value];
  }

  * gen() {
    this.index += 1;
    yield this.index;
  }
}

export {
  Cycled,
};
