const checkIfNumberCompatible = num => typeof +num === 'number';
function getCubeRoot(num) {
  if (!checkIfNumberCompatible(num)) { throw new Error(`Expected type to be convertible to:number \n Received type:${typeof num}`); }
  return Math.cbrt(+num);
}
const convertArrayToMap = getValueFunc => list => list.reduce((accumulator, currentVal) => {
  accumulator[currentVal] = getValueFunc(currentVal);
  return accumulator;
}, {});
const convertToCubeRootMap = convertArrayToMap(getCubeRoot);

function arrayCubeRootToJson(arr) {
  return convertToCubeRootMap(arr);
}

export {
  arrayCubeRootToJson,
};
