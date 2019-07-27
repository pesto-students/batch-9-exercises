
function dropElements(array1,retain) {
 // const finalArray = array1;

return array1.filter(retain);//can be used predicate
 /* array1.forEach((e1)=>
    {
      if(e1<retain)
      //if(e1!==retain)
        {
          finalArray.shift();
        }//use filtering
      /*if (finalArray.indexOf(retain) <= -1) 
        {
        finalArray.shift();
        }
    });*/

 // return finalArray;
}

export {
  dropElements,
};
