
function mapObject(obj,mapFunction) {
  let result = {} ;
  for ( var i in obj ){
    result[i] = mapFunction(obj[i])
  }
  return result
}

export {
  mapObject,
};
