
function sumAll(argArray) {
  let [firstNumber, secondNumber] = argArray;
  let sumOfArgArray = 0;
  if (firstNumber > secondNumber) {
    [firstNumber, secondNumber] = [secondNumber, firstNumber];
  }
  for (let i = firstNumber; i <= secondNumber; i += 1) {
    sumOfArgArray += i;
  }
  return sumOfArgArray;
}


export {
  sumAll,
};
