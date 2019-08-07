
function truthCheck(arrayOfObjects, key) {
  for (let i = 0; i < arrayOfObjects.length; i += 1) {
    if (!arrayOfObjects[i][key]) {
      return false;
    }
  }
  return true;
}

export {
  truthCheck,
};
