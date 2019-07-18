
function dropElements(array,predicate) {
  'use strict';
  if ( ! ((typeof predicate === 'Function' || typeof predicate === 'function') ) )
      throw new TypeError("Expected predicated to be function \n Received:"+predicate);
  let result = [] 
  
  for(let i = 0 ; i < array.length ; i++) {
    if(predicate(array[i]))
    result.push(array[i])
  }

  return result
}

export {
  dropElements,
};
