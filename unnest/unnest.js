
function unnest(args) {
  const keys = Object.keys(args).filter(key => key !== 'length');
  return keys.reduce((result, key) => result.concat(args[key]), []);
}

export {
  unnest,
};
