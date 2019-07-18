
function objectDefaults(obj, defaultProperties) {
  let newObject = {}
  for(let i in obj){
    newObject[i] = obj[i]
  }

  for(let j in defaultProperties) {
    if(!obj[j])
    newObject[j] = defaultProperties[j]
  }
  return newObject;
}

export {
  objectDefaults,
};
