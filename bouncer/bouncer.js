function bouncer(arrayToBeBounced) {
  if (!arrayToBeBounced)
    throw new Error(
      "The variable cannot be processed as it is: " + arrayToBeBounced
    );
  const bouncedArray = arrayToBeBounced.filter( iThArrayValue => !checkIfValueIsFalsy(iThArrayValue))
  return bouncedArray;
}
function checkIfValueIsFalsy(value){
  if(value === '' || value === null || value === undefined || value === 0 ||  value === false || value+"" === "NaN" )
  return true
  else
  return false
}
export { bouncer };
