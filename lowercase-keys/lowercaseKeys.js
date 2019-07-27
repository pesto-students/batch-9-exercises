
function lowercaseKeys(argObject) {

 Object.keys(argObject).map(key => argObject[(key.toLowerCase())] = argObject[key]);

 return argObject;
}

export {
  lowercaseKeys,
};
