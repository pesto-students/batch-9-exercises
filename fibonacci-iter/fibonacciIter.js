function* fibonacci() {
  let firstNumber = 1;
  let secondNumber = 2;
  yield firstNumber;
  yield secondNumber;
  while (true) {
    const next = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = next;
    yield next;
  }
}

const fibonacciIter = {
  [Symbol.iterator]: fibonacci,
};


export {
  fibonacciIter,
};
