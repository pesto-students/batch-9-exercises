
function counter() {
  let myCounter = 0;
  return () => {
    myCounter += 1;
    return myCounter;
  };
}

export {
  counter,
};
