/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
const firstChild = document.getElementById('page').firstElementChild;
const lastChild = document.getElementById('header').lastElementChild;
const next = document.querySelector('#header').nextElementSibling;
const previous = document.querySelector('#content').previousElementSibling;
const parent = document.querySelector('#page').parentElement;
const children = document.querySelector('body').childNodes;
const object = {
  firstChildOfPageId: firstChild,
  lastChildOfHeader: lastChild,
  nextSiblingOfHeader: next,
  previousSiblingOfContent: previous,
  parentNodeOfPage: parent,
  childNodesOfBody: children,
};

console.log(object);
