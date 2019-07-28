function placeInMiddle(firstArray, secondArray) {
  const middleIndex = Math.floor(firstArray.length / 2);
  const leftArray = firstArray.filter((value, index) => index < middleIndex);
  const rightArray = firstArray.filter((value, index) => index >= middleIndex);

  return [...leftArray, ...secondArray, ...rightArray];
}

export { placeInMiddle };
