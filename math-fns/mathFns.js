
function mathFns(mathfunc){

  //if(mathfunc==='sqrt'){
    function sqrt(number) {
      return Math.sqrt(number);
  }
//}

  function power(raise,number) {
    return Math.pow(number, raise);;
  }

  function round(number) {
    return Math.round(number);;
  }
}

export {
  mathFns,
};
