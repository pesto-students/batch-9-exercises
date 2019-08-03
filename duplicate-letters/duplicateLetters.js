
function duplicateLetters(string) {
  const letterAndFrequencyMap = new Map();
  let maxTimeOccurredLetter = 0;
  for (const currentLetter of string) {
    if (letterAndFrequencyMap.has(currentLetter)) {
      const updatedFrequencyOfCurrentLetter = letterAndFrequencyMap.get(currentLetter) + 1;
      if (updatedFrequencyOfCurrentLetter > maxTimeOccurredLetter) {
        maxTimeOccurredLetter = updatedFrequencyOfCurrentLetter;
      }
      letterAndFrequencyMap.set(currentLetter, updatedFrequencyOfCurrentLetter);
    } else {
      const initialFrequency = 1;
      letterAndFrequencyMap.set(currentLetter, initialFrequency);
    }
  }
  if (maxTimeOccurredLetter === 0) {
    return false;
  }
  return maxTimeOccurredLetter;
}

export {
  duplicateLetters,
};
