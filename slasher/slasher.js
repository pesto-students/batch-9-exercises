
function slasher(argArray, argLength) {
  return argArray.filter((value, key) => key >= argLength);
}

export {
  slasher,
};
