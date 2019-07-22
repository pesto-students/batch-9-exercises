function allOfConditions(...functions) {
  return input => {
    for (let i = 0; i < functions.length; i++) {
      const isTruthy = functions[i](input);
      if (!isTruthy) {
        break;
      }
    }
  };
}

export { allOfConditions };
