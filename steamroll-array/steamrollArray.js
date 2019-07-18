let flatArray = [];

function getFlatArray(inputArray) {
  for (let i = 0; i < inputArray.length; i += 1) {
    if (Array.isArray(inputArray[i])) {
      getFlatArray(inputArray[i]);
    } else {
      flatArray.push(inputArray[i]);
    }
  }
  return flatArray;
}

function steamrollArray(inputArray) {
  const tempFlatArray = getFlatArray(inputArray);
  flatArray = [];
  return tempFlatArray;
}

export {
  steamrollArray,
};
