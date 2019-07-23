import { throwError } from "rxjs";

function arrayAddition(array1, array2) {

  function isNumber(el) {
    return Number.isInteger(el);
  }

  var isArrayCorrect = Array.isArray(array1) && Array.isArray(array2) && array1.every(isNumber) && array2.every(isNumber) && array1.length > 0 && array2.length > 0 ;

  if (isArrayCorrect){
    while(array1.length != array2.length){
      if (array1.length < array2.length) {
        array1.push(0);
      }
      else {
        array2.push(0);
      }
    }
    return array1.map(function(x, index){ //here x = a[index]
      return array2[index] + x ;
   }); 
  }
  else{
    throw 'not array';
  }
}

export {
  arrayAddition,
};
