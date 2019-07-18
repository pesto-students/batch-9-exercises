
function repeatStringNumTimes(string, times) {
  let newString = '';
  for (let i = 0; i < times; i += 1) {
    newString += string;
  }
  return newString;
}

export {
  repeatStringNumTimes,
};
