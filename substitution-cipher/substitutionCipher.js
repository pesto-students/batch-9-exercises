const getCodePoint = character => character.codePointAt(0);

const shiftAlphabeticCharacterCodePoint = (characterCodePoint, shiftBy) => {
  const edgeCharPoints = {
    a: 97,
    z: 122,
    A: 65,
    Z: 90
  };

  if (
    characterCodePoint >= edgeCharPoints.a &&
    characterCodePoint <= edgeCharPoints.z
  ) {
    if (characterCodePoint + shiftBy > edgeCharPoints.z) {
      return (
        edgeCharPoints.a +
        (((characterCodePoint + shiftBy) % edgeCharPoints.z) - 1)
      );
    }
    return characterCodePoint + shiftBy;
  }

  if (
    characterCodePoint >= edgeCharPoints.A &&
    characterCodePoint <= edgeCharPoints.Z
  ) {
    if (characterCodePoint + shiftBy > edgeCharPoints.Z) {
      return (
        edgeCharPoints.A +
        (((characterCodePoint + shiftBy) % edgeCharPoints.Z) - 1)
      );
    }
    return characterCodePoint + shiftBy;
  }

  return characterCodePoint;
};

function substitutionCipher(string) {
  const cypheredString = string
    .split('')
    .map(character => {
      const codePoint = getCodePoint(character);
      const shiftCharacterBy = codePoint % 2 === 0 ? 6 : 4;

      const shiftedCharacterCodePoint = shiftAlphabeticCharacterCodePoint(
        codePoint,
        shiftCharacterBy
      );

      return String.fromCodePoint(shiftedCharacterCodePoint);
    })
    .join('');
  return cypheredString;
}

export { substitutionCipher };
