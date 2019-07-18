
function objectInvert(obj) {
  let newObject = {}
  for(let i in obj) {
    newObject[obj[i]] = i
  }
  return newObject
}

export {
  objectInvert,
};
