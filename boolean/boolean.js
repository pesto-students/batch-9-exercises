
function boolean(val) {
  switch (arguments.length) {
    case 1: if (val) { return true; }
      return false;
    default: throw Error(`Arguments length Not Valid. \n Expected Argumnets:1 \n Receievd Arguments:${arguments.length}`);
  }
}

export {
  boolean,
};
