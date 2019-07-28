
function type(args) {
  if (args === undefined) {
    return 'Undefined';
  }
  if (args === null) {
    return 'Null';
  }
  return args.constructor.name;
}

export {
  type,
};
