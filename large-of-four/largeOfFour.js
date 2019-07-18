function largeOfFour(arrayList) {
  let result = []
  let listSize = arrayList.length
  for(let i = 0 ; i < listSize ; i++ ) {
    result.push(findLargest(arrayList[i]))
  }
  return result;
}
function findLargest(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i++) {
    if(array[i] >largest)
    largest=array[i]
  }
  return largest
}
export { largeOfFour };
