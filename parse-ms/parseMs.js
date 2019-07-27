
function parseMs(argMillisecond) {

  const day = 1000 * 60 * 60 * 24;
  const days = Math.trunc(argMillisecond / day);
  argMillisecond %= day;

  const hour = 1000 * 60 * 60;
  const hours = Math.trunc(argMillisecond / hour);
  argMillisecond %= hour;

  const minute = 1000 * 60;
  const minutes = Math.trunc(argMillisecond / minute);
  argMillisecond %= minute;

  const second = 1000;
  const seconds = Math.trunc(argMillisecond / second);
  argMillisecond %= second;
  


  return {
    days,
    hours,
    minutes,
    seconds,
    argMillisecond,
  };
}

export {
  parseMs,
};
