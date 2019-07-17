function counter() {
  let count = 0;
  function mainCounter () {
    count = count+1
     return count;
  }
  return mainCounter
}

export {
  counter,
};
