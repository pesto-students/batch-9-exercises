
function objectDefaults(obj, defaultProperties) {
  let newObject = {}
  for(let key in obj){
    newObject[key] = obj[key]
  }

  for(let key in defaultProperties) {
    if(!obj[key])
    newObject[key] = defaultProperties[key]
  }
  return newObject;
}

export {
  objectDefaults,
};
