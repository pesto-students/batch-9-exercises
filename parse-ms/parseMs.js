
function parseMs(milliseconds) {
  let time = milliseconds;
  const timeObject = {};
  timeObject.days = Number.parseInt(time / (24 * 60 * 60 * 1000), 10);
  time -= (timeObject.days * (24 * 60 * 60 * 1000));
  timeObject.hours = Number.parseInt(time / (60 * 60 * 1000), 10);
  time -= (timeObject.hours * (60 * 60 * 1000));
  timeObject.minutes = Number.parseInt(time / (60 * 1000), 10);
  time -= (timeObject.minutes * (60 * 1000));
  timeObject.seconds = Number.parseInt((time / 1000), 10);
  time -= (timeObject.seconds * 1000);
  timeObject.milliseconds = time;
  return timeObject;
}

export {
  parseMs,
};
