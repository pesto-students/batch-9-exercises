function daysInMonth(year, monthInNumber) {
  const lastDateOfTheMonth = new Date(year, monthInNumber, 0);

  return lastDateOfTheMonth.getDate();
}

export { daysInMonth };
