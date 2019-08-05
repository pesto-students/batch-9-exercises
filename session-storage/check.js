/* eslint-disable */
function saveValues(event) {
  event.preventDefault();
  const form = document.getElementById("keyValueForm");
  const key = form["key"].value;
  const value = form["value"].value;
  sessionStorage.setItem(key, value);
  document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  addListItem(key, value);
  return;
}

function addListItem(key, value) {
  const ul = document.getElementsByClassName("session-key-values")[0];
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${key} : ${value}`));
  const button = document.createElement("button");
  button.innerHTML = "Delete Item";
  button.setAttribute("data-key", key);
  button.addEventListener('click', function () {
    // button.removeEventListener('click');
    sessionStorage.removeItem(key);
    ul.removeChild(li);
  });
  li.appendChild(button);
  ul.appendChild(li);
}