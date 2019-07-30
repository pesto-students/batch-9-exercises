
/* eslint-disable */
function question10() {
  const idIsPage = document.getElementById('page')
  const iSfirstChild = idIsPage.firstChild;
  const iSlastChild = idIsPage.lastChild;
  const iSnextSibling = iSfirstChild.nextSibling;
  const iSpreviousSibling = iSlastChild.previousSibling;
  const parent = iSlastChild.parentNode;
  const childGroup = idIsPage.childNodes;
}

question10();
