
function timeWas(...args) {
  const NOW = 1516816290;
  if (args.length === 1) {
    let timeDifference = (NOW - args) / 1000;
    if (timeDifference === 0) {
      timeDifference = 'just';
    }
    return `${timeDifference} seconds ago`;
  }
  const value = (args[1] - args[0]) / 1000;
  return `${value} seconds ago`;
}

export {
  timeWas,
};
