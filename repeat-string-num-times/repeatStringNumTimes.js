
function repeatStringNumTimes(string, times) {
  if (times < 1) {
    return '';
  }
  return string.repeat(times);
}

export {
  repeatStringNumTimes,
};
