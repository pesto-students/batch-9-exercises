function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

function isMonthValid(month) {
  return isInt(month) && month > 0 && month <= 12;
}

function daysInMonth(year, month) {
  if (!isMonthValid(month) || !isInt(year)) { throw new Error(''); }
  const days = new Date(year, month, 0).getDate();
  return days;
}


export {
  daysInMonth,
};
