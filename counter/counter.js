
function counter() {
  let count = 0;
  return () => ++count;
}

export {
  counter,
};
