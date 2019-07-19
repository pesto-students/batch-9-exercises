
function abbreviateString(string) {
  if (typeof string !== 'string') { throw new Error('Invalid Input Type. \n Expected Type: String \n Received Type:', typeof string); }
  const indexOfFirstWordEnd = string.indexOf(' ');
  const indexOfLastWord = string.lastIndexOf(' ') + 1;
  const firstWord = string.substring(0, indexOfFirstWordEnd);
  const lastWordFirstChar = string.charAt(indexOfLastWord).toUpperCase();
  let abbreviatedString = '';
  if (firstWord) { abbreviatedString = `${firstWord} ${lastWordFirstChar}.`; }

  return abbreviatedString;
}

export {
  abbreviateString,
};
