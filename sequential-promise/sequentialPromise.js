async function sequentialPromise(promises) {
  let input = '';
  for (let i = 0; i < promises.length; i++) {
    input = await promises[i](input);
  }

  return input;
}

export { sequentialPromise };
