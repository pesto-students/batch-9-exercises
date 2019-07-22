
function sumEvenArgs(...args) {

  function checkEven(num) {
    return num%2===0;
  }

  return Array.prototype.reduce.call(args.filter(checkEven), function(a, b) {
      return (a + b);
  }, 0);

}

export {
  sumEvenArgs,
};
