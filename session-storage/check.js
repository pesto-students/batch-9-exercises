/* eslint-disable */
let value = '';

function setSessionStorage() {
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  sessionStorage.setItem(key, value);
}

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText = 'Value add successful';
  }
}, 200);

