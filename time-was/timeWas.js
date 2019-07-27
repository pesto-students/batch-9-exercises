const SECONDS = 1000;
const MINUTES = SECONDS * 60;
const HOURS = MINUTES * 60;
const DAYS = HOURS * 24;
const WEEKS = DAYS * 7;
const MONTHS = DAYS * 30;
const YEARS = MONTHS * 12;

function timeWas(pastTime, date) {
  const currentDate = date || (new Date()).valueOf();
  const difference = (currentDate - pastTime);
  const TIME = [['year', YEARS], ['month', MONTHS], ['week', WEEKS],
  ['day', DAYS], ['hour', HOURS], ['minute', MINUTES], ['second', SECONDS]];
  let returnString = '';
  const differenceInSeconds = difference / SECONDS;
  if (differenceInSeconds < 1) {
    return 'just now';
  }
  TIME.some((time) => {
    const quotient = (difference / time[1]);
    if (quotient >= 1) {
      const timeString = parseInt(quotient) > 1 ? time[0] + 's' : time[0];
      returnString = `${parseInt(quotient)} ${timeString} ago`;
      return true;
    }
    return false;
  });
  return returnString;
}

export {
  timeWas,
};
