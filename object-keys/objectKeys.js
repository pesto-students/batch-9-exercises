
function objectKeys(obj) {
  let result = []
  let i = 0
  for(var key in obj)
  {
    result[i]=key
    i= i+1;
  }

  return result;
}

export {
  objectKeys,
};
