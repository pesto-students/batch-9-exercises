
function truthCheck(array, key) {
  return array.every(a => a[key]);
}

export {
  truthCheck,
};
