function repeatStringNumTimes(string, repeatFor) {
  if (repeatFor <= 0) {
    return '';
  }

  let output = '';
  for (let i = 0; i < repeatFor; i++) {
    output += string;
  }

  return output;
}

export { repeatStringNumTimes };
