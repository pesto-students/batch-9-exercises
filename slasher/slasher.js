
function slasher(array, length) {
  return array.filter((value, key) => key >= length);
}

export {
  slasher,
};
