const capitalize = str => str[0].toUpperCase() + str.slice(1);

function types(entity) {
  if (Array.isArray(entity)) {
    return 'Array';
  }
  if (entity === null) {
    return 'Null';
  }
  const entityType = typeof entity;
  if (entityType === 'object' && entity instanceof RegExp) {
    return 'RegExp';
  }
  return capitalize(entityType);
}

export {
  types,
};
