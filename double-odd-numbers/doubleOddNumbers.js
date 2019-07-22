
function doubleOddNumbers(...args) {

  let result_final = [];

  return result_final = args.filter(function(num) {
    return num%2!==0;
  });

  //result_final =  result_final*2;

  //return result_final;

}

export {
  doubleOddNumbers,
};
