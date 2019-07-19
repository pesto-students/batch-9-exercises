
function lowercaseKeys(convert_object) {

 return Object.keys(convert_object).forEach(key => {
    const value = convert_object[key];
    delete convert_object[key];
    convert_object[key.toLowerCase()] = value;
  });
}

export {
  lowercaseKeys,
};
