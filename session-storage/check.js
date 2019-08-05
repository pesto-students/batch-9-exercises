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

