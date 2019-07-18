
function largeOfFour(arr) {
  const arrayOfMaxNumbers = arr.map(element => Math.max(...element));
  return arrayOfMaxNumbers;
}

export {
  largeOfFour,
};
