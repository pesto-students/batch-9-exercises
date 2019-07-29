

var boldItems;
window.onload = getBoldItems();
 
function getBoldItems() 
{
  boldItems = document.getElementsByTagName('strong'); 
}

function highlightThis() 
{
   for (var i=0; i<boldItems.length; i++)
   {                                                    
    boldItems[i].style.color = "red";
    }
    //alert(i);
}

function returnToNormal()
{
  for (var i=0; i<boldItems.length; i++) 
  {
       boldItems[i].style.color = "black";
  }
}

export {
  returnToNormal,
  highlightThis,
  getBoldItems,
};
