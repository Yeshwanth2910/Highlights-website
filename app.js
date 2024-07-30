const expandableDiv = document.querySelector('.expandable-div');
const hiddenContent = document.querySelector('.hidden-content');

expandableDiv.addEventListener('click', () => {
  expandableDiv.classList.toggle('expanded');
});

function toggleContent() {
  hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
}