
function diffArray(firstArray, secondArray) {
  const newArray = [];
  firstArray.forEach((element) => {
    if (secondArray.indexOf(element) < 0) newArray.push(element);
  });
 
  secondArray.forEach((element) => {
    if (firstArray.indexOf(element) < 0) newArray.push(element);
  });

  return newArray;
}

export {
  diffArray,
};
