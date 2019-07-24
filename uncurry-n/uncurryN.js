
function uncurryN(numberOfArgs, curriedFn) {
  const numberOfArgsCopy = numberOfArgs;
  const uncurried = (arg1, ...args)=>{
    while(numberOfArgsCopy > 0){
      curriedFn(arg1)
    }
  };
}

export {
  uncurryN,
};
