
function abbreviateString(text) {
  if (!typeof text === 'string') {
    throw TypeError(`Expected type string, received ${typeof text}`);
  }
  const arr = text.split(' ');
  return arr[0] + ' ' + arr[arr.length - 1][0].toUpperCase() + '.'
}

export {
  abbreviateString,
};
