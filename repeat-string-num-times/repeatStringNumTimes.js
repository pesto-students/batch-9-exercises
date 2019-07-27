
function repeatStringNumTimes(str, timesToBeRepeated) {
  if (timesToBeRepeated < 0) {
    return '';
  }
  return str.repeat(timesToBeRepeated);
}

export {
  repeatStringNumTimes,
};
