
function slasher(array,deleteCount) {
  let result = [] 
  let j = 0 
  for(let i = deleteCount ; i < array.length ; i++) {
    result[j] = array[i]
    j++
  }
  return result;
}

export {
  slasher,
};
