
function repeatStringNumTimes(string, timesToRepeat) {
  let repeatedString;
  if (timesToRepeat <= 0) {
    repeatedString = '';
  } else {
    repeatedString = string.repeat(timesToRepeat);
  }
  return repeatedString;
}

export {
  repeatStringNumTimes,
};
