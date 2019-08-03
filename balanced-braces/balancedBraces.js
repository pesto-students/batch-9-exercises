
function balancedBraces(string) {
  const brackets = { open: '[', close: ']' };
  const curlyBraces = { open: '{', close: '}' };
  const parentheses = { open: '(', close: ')' };
  const bracesToCheck = [brackets, curlyBraces, parentheses];
  const stackForBrackets = [];
  for (const char of string) {
    const currentBraces = bracesToCheck.find(val => (val.open === char) || (val.close === char));
    if (currentBraces) {
      const isOpenBraces = char === currentBraces.open;
      if (isOpenBraces) {
        stackForBrackets.push(currentBraces.open);
      } else {
        const lastOpenBracesInStack = stackForBrackets.pop();
        if (lastOpenBracesInStack !== currentBraces.open) {
          return false;
        }
      }
    }
  }
  return stackForBrackets.length === 0;
}

export {
  balancedBraces,
};
