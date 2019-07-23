function addArray(firstArray, secondArray) {
  return firstArray.map((el, index) => {
    const secondValue = secondArray[index];
    console.log(el, secondValue);
    return el + (secondValue === undefined ? 0 : secondValue);
  });
}

const isNumberArray = list => list.every(el => typeof el === 'number');

function arrayAddition(...args) {
  let [firstArray, secondArray] = args;
  if (!Array.isArray(firstArray) || !Array.isArray(secondArray)) {
    throw new TypeError(`Both arguments should be of type array. Received: 1st arg of type ${firstArray} & 2nd args of type ${secondArray}`);
  }
  if (!isNumberArray(firstArray) || !isNumberArray(secondArray)) {
    if (!isNumberArray(firstArray)) {
      throw new Error('First array contains values other than number.');
    }
    throw new Error('Second array contains values other than number.');
  }
  if (firstArray.length === 0 || secondArray.length === 0) {
    if (firstArray.length === 0) {
      throw new Error('First array is empty.');
    }
    throw new Error('Second array is empty.');
  }
  if (firstArray.length >= secondArray.length) {
    return addArray(firstArray, secondArray);
  }
  [firstArray, secondArray] = [secondArray, firstArray];
  return addArray(firstArray, secondArray);
}

export {
  arrayAddition,
};
