
function dropElements(array1,retain) {
  const finalArray = array1;

  array1.forEach((e1)=>
    {
      if(e1!==retain)
        {
          finalArray.shift();
        }
      /*if (finalArray.indexOf(retain) <= -1) 
        {
        finalArray.shift();
        }*/
    });

  return finalArray;
}

export {
  dropElements,
};
