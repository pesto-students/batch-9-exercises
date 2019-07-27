
function joinArrays(...argArrays) {
  return argArrays.reduce(function (flat, toFlatten) {
    return flat.concat(toFlatten);
  },[]);
}

export {
  joinArrays,
};
