function largeOfFour([firstArray, secondArray, thirdArray, fourthArray]) {
  const resultArray = [];
  resultArray.push(firstArray.sort((a, b) => a - b)[firstArray.length - 1]);
  resultArray.push(secondArray.sort((a, b) => a - b)[secondArray.length - 1]);
  resultArray.push(thirdArray.sort((a, b) => a - b)[thirdArray.length - 1]);
  resultArray.push(fourthArray.sort((a, b) => a - b)[fourthArray.length - 1]);
  return resultArray;
}

export { largeOfFour };
