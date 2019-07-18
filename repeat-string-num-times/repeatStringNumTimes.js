function repeatStringNumTimes(string, count) {
  
  if (count < 0) return '';
  
  return string.repeat(count);
}

export { repeatStringNumTimes };
