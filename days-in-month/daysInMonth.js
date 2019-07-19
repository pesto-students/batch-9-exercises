function getPreviousDay(date) {
  const previousDay = new Date(date.setDate(date.getDate() - 1));
  return previousDay;
}
function daysInMonth(year, month) {
  const date = new Date(year, month);
  const lastDayOfMonth = getPreviousDay(date);
  return lastDayOfMonth.getDate();
}
export {
  daysInMonth,
};
