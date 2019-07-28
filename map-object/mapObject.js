
function mapObject(obj,mapFunction) {
  let result = {} ;
  for ( var key in obj ){
    result[key] = mapFunction(obj[key])
  }
  return result
}

export {
  mapObject,
};
