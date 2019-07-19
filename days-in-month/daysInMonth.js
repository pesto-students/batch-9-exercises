
function daysInMonth(year, month) {
  const date = new Date(year, month, 0);
  return date.getDate();
}

export {
  daysInMonth,
};
