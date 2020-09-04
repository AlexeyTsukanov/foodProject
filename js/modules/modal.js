function closeModalWindow(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'none';
  document.body.style.overflow = "";
}

function openModalWindow(modalSelector, timerID) {
  const modal = document.querySelector(modalSelector);
  modal.style.display = 'block';
  document.body.style.overflow = "hidden";
  if(timerID){
    clearTimeout(timerID);
  }
}

function modal(triggerSelector, modalSelector, timerID){
    /** --------------modal----------- */

  const modal = document.querySelector(modalSelector),
  modalOpen = document.querySelectorAll(triggerSelector);



function showModalByScroll() {
if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
openModalWindow(modalSelector, timerID);
window.removeEventListener('scroll', showModalByScroll);
}
}

modalOpen.forEach(btn => {
  btn.addEventListener('click', () => openModalWindow(modalSelector, timerID));
});


modal.addEventListener('click', e => {
if (e.target === modal || e.target.getAttribute('data-close') == '') {
closeModalWindow(modalSelector);
}
});
document.addEventListener('keydown', e => {
if (e.code === 'Escape') {
closeModalWindow(modalSelector);
}
}); 

window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModalWindow, openModalWindow};