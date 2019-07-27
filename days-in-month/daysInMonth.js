
function daysInMonth(argYear, argMonth) {
  const dayInMonth = new Date(argYear, argMonth, 0);

  return dayInMonth.getDate();
}

export {
  daysInMonth,
};
