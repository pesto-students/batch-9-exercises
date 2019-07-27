
function counter() {
  let counterValue = 0;
  return () => {
    counterValue += 1;
    return counterValue;
  };
}

export {
  counter,
};
