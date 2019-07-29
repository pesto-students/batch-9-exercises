const rotateArray = array => (pivot) => {
  const firstPart = array.slice(array.indexOf(pivot));
  const secondPart = array.slice(0, array.indexOf(pivot));
  const rotatedArray = firstPart.concat(secondPart);
  return rotatedArray;
};

function rotatedString(firstString, secondString) {
  if (typeof firstString !== 'string' || typeof secondString !== 'string') {
    throw new TypeError(`Expected: both inputs should be strings, Received: ${typeof firstString} ${typeof secondString}`);
  }
  if (firstString === secondString) {
    return false;
  }
  const originalCharacters = firstString.split('');
  const rotateFromPivot = rotateArray(originalCharacters);
  const rotatedArray = rotateFromPivot(secondString[0]);
  const stringAfterRotation = rotatedArray.join('');
  if (stringAfterRotation === secondString) {
    return true;
  }
  return false;
}

export {
  rotatedString,
};
