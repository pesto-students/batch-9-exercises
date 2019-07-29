// eslint-disable-next-line no-undef
const paragraph = document.querySelector('p');
paragraph.addEventListener('mouseenter', () => {
  paragraph.classList.add('bold');
});

paragraph.addEventListener('mouseleave', () => {
  paragraph.classList.remove('bold');
});
