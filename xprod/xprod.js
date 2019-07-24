
const isArrayEmpty = arr => arr.length === 0;

function xprod(...arrays) {
  if (isArrayEmpty(arrays[0]) || isArrayEmpty(arrays[1])) {
    return [];
  }
  const newArray = [];
  arrays[0].forEach(element => arrays[1].forEach((innerElement) => {
    newArray.push([element, innerElement]);
  }));
  return newArray;
}

export {
  xprod,
};
