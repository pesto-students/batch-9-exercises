/* eslint-disable no-param-reassign */

function parseMs(milliseconds) {
  // if (milliseconds < 0) {
  //   milliseconds *= -1;
  // }
  const day = 1000 * 60 * 60 * 24;
  const days = Math.trunc(milliseconds / day);
  milliseconds %= day;
  const hour = 1000 * 60 * 60;
  const hours = Math.trunc(milliseconds / hour);
  milliseconds %= hour;
  const minute = 1000 * 60;
  const minutes = Math.trunc(milliseconds / minute);
  milliseconds %= minute;
  const second = 1000;
  const seconds = Math.trunc(milliseconds / second);
  milliseconds %= second;
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };
}

export {
  parseMs,
};
