
function objectKeys(obj) {
  let result = []

  for(var key in obj)
  {
    result.push(key)
  }
  
  return result;
}

export {
  objectKeys,
};
