
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if ((charCode >=49) && (charCode <=53)) {
        return true;
      }
    return false;
}

export {
  isNumberKey,
};
