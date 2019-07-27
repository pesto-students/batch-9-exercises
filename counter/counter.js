
function counter() {
  let func_counter = 0;
  return () => {
    return func_counter += 1;
  };
}

export {
  counter,
};
