const timeDifferenceString = (timeDifference) => {
  const SECONDS = 1000;
  const MINUTES = SECONDS * 60;
  const HOURS = MINUTES * 60;
  const DAYS = HOURS * 24;
  const WEEKS = DAYS * 7;
  const MONTHS = DAYS * 30;
  const YEARS = MONTHS * 12;

  const timeUnits = {
    [YEARS]: 'year',
    [MONTHS]: 'month',
    [WEEKS]: 'week',
    [DAYS]: 'day',
    [HOURS]: 'hour',
    [MINUTES]: 'minute',
    [SECONDS]: 'second',
  };
  const probableUnits = Object.keys(timeUnits).filter(key => key <= timeDifference);
  const timeUnitToDisplay = probableUnits[probableUnits.length - 1];
  const unitCount = timeDifference / timeUnitToDisplay;
  const forPlural = unitCount > 1 ? 's' : '';
  const displayValue = `${unitCount} ${timeUnits[timeUnitToDisplay]}${forPlural} ago`;
  return displayValue;
};

function timeWas(earlierTime, givenTime) {
  const currentTime = givenTime || Date.now();
  const timeDifference = (currentTime - earlierTime);
  if (timeDifference < 1000) {
    return 'just now';
  }
  return timeDifferenceString(timeDifference);
}

export {
  timeWas,
};
