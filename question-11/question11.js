/* eslint-disable no-undef */
const title = document.getElementById('title');
console.log(title.firstChild.nodeValue);
title.firstChild.nodeValue = 'Changed using NodeValue.';

const h2 = document.getElementsByTagName('h2');
h2[0].setAttribute('class', 'random');
console.log(h2);
