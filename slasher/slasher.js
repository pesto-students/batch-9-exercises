
function slasher(array, position) {
  const slashedArray = array.splice(position);
  return slashedArray;
}

export {
  slasher,
};
