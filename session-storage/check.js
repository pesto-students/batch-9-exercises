/* eslint-disable */
let value = '';

window.setInterval(() => {
  if (value === '' || value === null) {
    value = sessionStorage.getItem('world');
  } else {
    document.getElementsByClassName('status')[0].innerText =
      'Value add successful';
  }
}, 200);

function setSessionStorage(event) {
  event.preventDefault();
  const key = document.getElementById('key').value;
  const val = document.getElementById('value').value;
  console.log(key + val);
  sessionStorage.setItem(key, val);
}
