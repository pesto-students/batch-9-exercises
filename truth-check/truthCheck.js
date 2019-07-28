
function truthCheck(array, key) {
  return array.every(object => Boolean(object[key]));
}

export {
  truthCheck,
};
