
function blockScoping(n) {
  const callbacks = [];
  switch (arguments.length) {
    case 1:
      for (let i = 0; i <= 10; i += 1) {
        callbacks.push(() => i);
      }
      return callbacks[n]();

    default: throw new Error(`Expected Number of Arguments:0 \n Received number of argumnets:${arguments.length}`);
  }
}

export {
  blockScoping,
};
