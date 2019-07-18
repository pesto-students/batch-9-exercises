
function objectInvert(obj) {
  let newObject = {}
  for(let key in obj) {
    newObject[obj[key]] = key
  }
  return newObject
}

export {
  objectInvert,
};
