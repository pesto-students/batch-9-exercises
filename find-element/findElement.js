/* eslint-disable no-plusplus */

// eslint-disable-next-line consistent-return
function findElement(array, func) {
  let number = 0;
  for (let i = 0; i < array.length; i++) {
    if (func(array[i]) === true) {
      number = array[i];
      return number;
    }
  }
}

export {
  findElement,
};
