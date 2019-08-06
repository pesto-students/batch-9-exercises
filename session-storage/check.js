/* eslint-disable */
let value = '';

function setSessionStorage() {
  const key = document.querySelector('#key').value;
  const value1 = document.querySelector('#value').value;
  sessionStorage.setItem(key, value1);
}


window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

const ul = document.querySelector('ul');

Object.keys(sessionStorage).forEach((key) => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(`${key}: ${sessionStorage.getItem(key)}`));
  const button = document.createElement('button');
  button.setAttribute('class', key);
  li.setAttribute('class', key);
  button.innerHTML = 'delete';
  li.appendChild(button);
  ul.appendChild(li);
});


