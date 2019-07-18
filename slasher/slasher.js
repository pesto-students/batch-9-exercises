
function slasher(...args) {
  const array = args[0];
  const position = args[1];
  const slashedArray = array.splice(position);
  return slashedArray;
}

export {
  slasher,
};
