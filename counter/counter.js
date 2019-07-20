
function counter() {
  let count = 0;
  // eslint-disable-next-line no-plusplus
  return () => ++count
}

export {
  counter,
};
