const charCode = char => char.charCodeAt(0);
const isUpperCase = asciiCode => asciiCode >= 65 && asciiCode <= 90;

function alphabeticShift(string) {
  const upper = { start: 65, end: 90 };
  const lower = { start: 97, end: 122 };
  return string.split('').map(char => {
    const asciiCode = charCode(char);
    let nextCode = asciiCode + 1;
    const limit = isUpperCase(asciiCode) ? upper : lower;
    if (nextCode > limit.end) {
      nextCode = limit.end - asciiCode + limit.start;
    }
    return String.fromCharCode(nextCode);
  }).join('');
}

export {
  alphabeticShift,
};
