
function dropElements(array,predicate) {
  'use strict';
  if ( ! ((typeof predicate === 'Function' || typeof predicate === 'function') ) )
      throw new TypeError("Expected predicated to be function \n Received:"+predicate);
  let result = [] 
  let j = 0;
  for(let i = 0 ; i < array.length ; i++) {
    if(predicate(array[i]))
    {
      result[j]=(array[i])
      j++;
    }
  }

  return result
}

export {
  dropElements,
};
