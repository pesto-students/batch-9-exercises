/* eslint-disable no-restricted-globals */
const isArray = arr => arr && arr.constructor === Array;
const checkIfNumberCompatible = num => !isNaN(parseFloat(num));
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
  if (!isArray(arr)) {
    throw new Error(`Expected: array \n Received:${typeof arr}`);
  }
  return convertToCubeRootMap(arr);
}
export {
  arrayCubeRootToJson,
};
