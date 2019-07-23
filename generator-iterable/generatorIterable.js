
function* generatorIterable(lb = 1, ub = 5) {
  let currentCount = lb;
  while (true) {
    if (currentCount <= ub) {
      yield currentCount;
    } else {
      return;
    }
    currentCount += 1;
  }
}

export {
  generatorIterable,
};
