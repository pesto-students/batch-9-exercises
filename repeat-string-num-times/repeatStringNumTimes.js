/* eslint-disable no-plusplus */

function repeatStringNumTimes(inputString, count) {
  let repeatString = '';
  if (count > 0) {
    for (let i = 0; i < count; i++) {
      repeatString += inputString;
    }
  }
  return repeatString;
}

export {
  repeatStringNumTimes,
};
