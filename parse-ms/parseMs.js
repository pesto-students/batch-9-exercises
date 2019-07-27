
function parseMs(miliseconds) {
  const arr = [['milliseconds', 1], ['seconds', 1000], ['minutes', 60000], ['hours', 3600000], ['days', 86400000]];

  let remainder = miliseconds;

  const obj = arr.reduceRight((acc, element) => {
    const quotient = parseInt((remainder / element[1]), 10);
    if (Math.abs(quotient) >= 1) {
      acc[element[0]] = quotient;
      remainder %= element[1];
    } else {
      acc[element[0]] = Math.sign(miliseconds) < 0 ? -0 : 0;
    }
    return acc;
  }, {});
  return obj;
}

export {
  parseMs,
};
