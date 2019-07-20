
function reverseString(string) {
  if (typeof string !== 'string') {
    throw TypeError('Expected type: string, received type : ' + typeof string);
  }
  if (string === '') {
    return '';
  }
  return string.split('').reduceRight((accumulator, char) => accumulator + char);
}

export {
  reverseString,
};
