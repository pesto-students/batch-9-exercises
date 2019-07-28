const SECONDS_IN_MILLISECONDS = 1000;
const MINUTES_IN_MILLISECONDS = SECONDS_IN_MILLISECONDS * 60;
const HOURS_IN_MILLISECONDS = MINUTES_IN_MILLISECONDS * 60;
const DAYS_IN_MILLISECONDS = HOURS_IN_MILLISECONDS * 24;

const keys = ['days', 'hours', 'minutes', 'seconds', 'milliseconds'];
const keyValueInSeconds = {
  days: DAYS_IN_MILLISECONDS,
  hours: HOURS_IN_MILLISECONDS,
  minutes: MINUTES_IN_MILLISECONDS,
  seconds: SECONDS_IN_MILLISECONDS,
  milliseconds: 1,
};

function getKeyValue(key, milliseconds) {
  return Math.floor(milliseconds / keyValueInSeconds[key]);
}

function parseMs(timeInMs) {
  const signTimeInMs = Math.sign(timeInMs);
  const absTimeInMs = Math.abs(timeInMs);
  let remainingTimeInMs = absTimeInMs;

  return keys
    .reduce((msObj, key) => {
      const value = signTimeInMs * getKeyValue(key, remainingTimeInMs);
      remainingTimeInMs %= keyValueInSeconds[key];
      return {
        ...msObj,
        [key]: value,
      };
    }, {});
}

export {
  parseMs,
};
