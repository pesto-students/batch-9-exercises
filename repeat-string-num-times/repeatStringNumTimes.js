
function repeatStringNumTimes(str, repeatTimes) {
  if (repeatTimes < 0) {
    return '';
  }
  return str.repeat(repeatTimes);
}

export {
  repeatStringNumTimes,
};
