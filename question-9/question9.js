/* eslint-disable */
function question9() {
  const boldValues = document.getElementsByTagName('b');
  for (let i = 0; i < boldValues.length; i += 1) {
    boldValues[i].innerHTML = "<mark>" + boldValues[i].innerHTML + "</mark>";
  }
}

function revert() {
  const boldValues = document.getElementsByTagName('b');
  for (let i = 0; i < boldValues.length; i += 1) {
    boldValues[i].innerHTML = boldValues[i].innerText;
  }
}