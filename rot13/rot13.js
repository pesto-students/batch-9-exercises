
function rot13(str) {
  const codeA = 'A'.charCodeAt(0);
  const codeN = 'N'.charCodeAt(0);
  const codeZ = 'Z'.charCodeAt(0);
  const newArr = [];

  for (let i = 0; i < str.length; i += 1) {
    const code = str.charCodeAt(i);
    if (code >= codeA && code <= codeZ) {
      if (code >= codeN) {
        newArr.push(String.fromCharCode(code - 13));
      } else {
        newArr.push(String.fromCharCode(code + 13));
      }
    } else {
      newArr.push(str[i]);
    }
  }
  return newArr.join('');
}

export {
  rot13,
};
