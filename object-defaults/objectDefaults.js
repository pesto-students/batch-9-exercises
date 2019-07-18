function objectDefaults(object, defaultObj) {
  const overRiddenObject = { ...defaultObj, ...object };
  return overRiddenObject;
}

export { objectDefaults };
