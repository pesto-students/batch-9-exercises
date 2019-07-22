const SECONDS = 1;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;
// Date.now = () => 1516816290;
const timeUnits = [
  {
    unit: 'year',
    divisor: YEARS,
  },
  {
    unit: 'month',
    divisor: MONTHS,

  },
  {
    unit: 'week',
    divisor: WEEKS,
  },
  {
    unit: 'day',
    divisor: DAYS,
  },
  {
    unit: 'hour',
    divisor: HOURS,
  },
  {
    unit: 'minute',
    divisor: MINUTES,
  },
  {
    unit: 'second',
    divisor: SECONDS,
  },
];
function formatString(currentString, quotient, unit) {
  if (quotient > 1) {
    return `${quotient} ${unit}s ${currentString}`;
  }
  return `${quotient} ${unit} ${currentString}`;
}

function calculateTimeWas(...args) {
  let differenceInSeconds = args[0];
  let result = '';
  let currentIndex = 0;
  while (differenceInSeconds !== 0) {
    const { divisor, unit } = timeUnits[currentIndex];
    const quotient = Math.floor(differenceInSeconds / divisor);
    const remainder = differenceInSeconds % divisor;
    if (quotient !== 0) {
      result = formatString(result, quotient, unit);
    }
    differenceInSeconds = remainder;
    currentIndex += 1;
  }
  return `${result}ago`;
}
function timeWas(pastTime, timeNow) {
  const now = timeNow || Date.now();
  const secondsInMilliseconds = 1000;
  const differenceInSeconds = (now - pastTime) / secondsInMilliseconds;
  let result = '';
  if (differenceInSeconds < 1) {
    result = 'just now';
  } else {
    result = calculateTimeWas(differenceInSeconds);
  }

  return result;
}

export {
  timeWas,
};
