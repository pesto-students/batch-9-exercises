
function counterFactory() {
  var count = 0
  var counter = {
   
     increment: function (){
      return ++count;
    },

     decrement : function (){
      return --count;
    }
  }
  return counter;
}

export {
  counterFactory,
};
