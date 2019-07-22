
function doubleOddNumbers(...args) {
  function checkOdd(num) {
    return num%2!=0;
  }

  return Array.prototype.reduce.call(args.filter(checkOdd), function(a) {
      return 2*a;
  }, 0);

}

export {
  doubleOddNumbers,
};
