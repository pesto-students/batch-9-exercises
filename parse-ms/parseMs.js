function parseMs(millisec) {
  let milliseconds = millisec >= 0 ? millisec : -millisec;

  const object = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0
  };
  object.days = Math.floor(milliseconds / (24 * 60 * 60 * 1000));
  const daysms = milliseconds % (24 * 60 * 60 * 1000);
  object.hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = milliseconds % (60 * 60 * 1000);
  object.minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = milliseconds % (60 * 1000);
  object.seconds = Math.floor(minutesms / 1000);
  object.milliseconds = milliseconds % 1000;
  return object;
}

export { parseMs };
